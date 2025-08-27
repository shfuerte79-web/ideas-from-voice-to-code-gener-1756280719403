export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-center">
        Ideas from: Voice-to-Code Generator
      </h1>
        <h1 className="text-4xl font-bold text-center mb-8">
          Ideas from: Voice-to-Code Generator
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          ```json
[
  {
    \"title\": \"Voice-Driven API Builder\",
    \"description\": \"أداة تتيح للمستخدمين إنشاء واجهات برمجة التطبيقات (APIs) من خلال الأوامر الصوتية، مما يسهل على المطورين غير المتخصصين بناء خدماتهم الخاصة.\",
    \"mvp_plan\": \"استخدام مكتبة تحويل الصوت إلى نص لإنشاء واجهة بسيطة حيث يمكن للمستخدمين إدخال الأوامر الصوتية لإنشاء نقاط نهاية API. تضمين بعض القوالب الأساسية وإمكانية تصدير الكود.\"
  },
  {
    \"title\": \"Voice-Activated Code Review Assistant\",
    \"description\": \"أداة تستخدم الذكاء الاصطناعي لمراجعة الكود بناءً على الأوامر الصوتية، مما يساعد المطورين على تحسين جودة الكود بشكل أسرع.\",
    \"mvp_plan\": \"إنشاء واجهة مستخدم بسيطة حيث يمكن للمستخدمين تسجيل أوامر صوتية لمراجعة أجزاء معينة من الكود. استخدام نموذج AI لتحليل الكود وتقديم ملاحظات فورية.\"
  },
  {
    \"title\": \"Voice-Based Learning Platform for Coders\",
    \"description\": \"منصة تعليمية تفاعلية تسمح للمستخدمين بتعلم البرمجة من خلال الأوامر الصوتية، مما يجعل التعلم أكثر سهولة ومرونة.\",
    \"mvp_plan\": \"تطوير واجهة تفاعلية حيث يمكن للمستخدمين طرح أسئلة صوتية حول البرمجة والحصول على إجابات فورية. تضمين دروس قصيرة تفاعلية يمكن الوصول إليها عبر الأوامر الصوتية.\"
  }
]
```
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="/auth" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Get Started
          </a>
          <a 
            href="/dashboard" 
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Dashboard
          </a>
        </div>
      </div>
    </main>
  )
}