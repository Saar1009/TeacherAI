import { Suspense } from 'react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">מערכת למידה חכמה</h1>
        <p className="text-gray-600">למידה מותאמת אישית בקבוצות קטנות בעזרת בינה מלאכותית</p>
      </header>

      <main>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* כרטיס כיתה */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-4">היסטוריה - כיתה י׳</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">נושא השיעור</h3>
                <p className="text-gray-600">מלחמת העולם השנייה - הסיבות לפרוץ המלחמה</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">קבוצות לימוד</h3>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between bg-gray-50 p-3 rounded">
                    <span>קבוצה 1</span>
                    <span className="text-sm text-gray-500">3 תלמידים</span>
                  </li>
                  <li className="flex items-center justify-between bg-gray-50 p-3 rounded">
                    <span>קבוצה 2</span>
                    <span className="text-sm text-gray-500">4 תלמידים</span>
                  </li>
                  <li className="flex items-center justify-between bg-gray-50 p-3 rounded">
                    <span>קבוצה 3</span>
                    <span className="text-sm text-gray-500">3 תלמידים</span>
                  </li>
                </ul>
              </div>

              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
               שלי כניסה לכיתה
              </button>
            </div>
          </div>

          {/* כרטיס יצירת כיתה חדשה */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-dashed border-gray-300">
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">יצירת כיתה חדשה</h3>
              <p className="text-gray-500 mb-4">הוספת כיתה חדשה למערכת</p>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                יצירת כיתה
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
