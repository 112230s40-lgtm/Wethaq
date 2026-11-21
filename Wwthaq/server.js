require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json({ limit: "1mb" }));

// عرض ملفات منصة وثاق
app.use(express.static(__dirname));

// استقبال طلب إنشاء البرنامج السياحي
app.post("/api/plan-trip", async (req, res) => {
    try {
       const { governorates, days, budget, tripType, language = "ar" } = req.body;

        if (!governorates || !days || !budget || !tripType) {
            return res.status(400).json({
                error: "يرجى تعبئة جميع بيانات الرحلة."
            });
        }

        if (!process.env.GEMINI_API_KEY) {
            throw new Error("GEMINI_API_KEY is missing from .env");
        }

        const { GoogleGenAI } = await import("@google/genai");

        const ai = new GoogleGenAI({
            apiKey: process.env.GEMINI_API_KEY
        });

      const prompt = `
You are a professional tourism assistant specializing in tourism in Oman.

The selected language is: ${language === "en" ? "English" : "Arabic"}.

Write the entire travel itinerary ONLY in the selected language.
If the selected language is Arabic, write everything in Arabic.
If the selected language is English, write everything in English.
Do not mix Arabic and English.

Create a realistic and organized travel itinerary.
Consider the selected governorates, budget in Omani Rials, and trip type.
Do not invent prices or confirmed information.
Clearly label uncertain costs as estimates.

بيانات الرحلة:
المحافظات: ${governorates}
عدد الأيام: ${days}
الميزانية بالريال العماني: ${budget}
نوع الرحلة: ${tripType}

أنشئ برنامجاً يومياً يتضمن:
الأماكن المقترحة، الأنشطة، ترتيب الزيارات،
والتكلفة التقديرية لكل يوم.
`;

        const response = await ai.models.generateContent({
           model: "gemini-3.5-flash-lite",
            contents: prompt
        });

        res.json({
            success: true,
            plan: response.text
        });

    } catch (error) {
        console.error("Trip planning error:", error);

        res.status(500).json({
            error: "تعذر إنشاء البرنامج السياحي. تحقق من إعدادات الاتصال ومفتاح Gemini."
        });
    }
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Withaq server running at http://localhost:${PORT}`);
});