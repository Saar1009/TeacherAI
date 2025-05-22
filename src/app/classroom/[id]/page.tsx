'use client';

import { useState } from 'react';
import ChatInterface from '@/components/ChatInterface';

export default function ClassroomPage({ params }: { params: { id: string } }) {
  const [selectedGroup, setSelectedGroup] = useState<number | null>(null);

  const lessonTopic = "מלחמת העולם השנייה - הסיבות לפרוץ המלחמה";
  const lessonContext = `שיעור היסטוריה לכיתה י' העוסק בגורמים שהובילו למלחמת העולם השנייה.
  נושאים מרכזיים:
  1. הסכם ורסאי והשפעתו על גרמניה
  2. המשבר הכלכלי העולמי
  3. עליית המשטרים הטוטליטריים
  4. מדיניות הפיוס של המערב`;

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">היסטוריה - כיתה י׳</h1>
            <p className="text-gray-600">{lessonTopic}</p>
          </div>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
            סיום שיעור
          </button>
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* רשימת קבוצות */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">קבוצות לימוד</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((group) => (
                <div
                  key={group}
                  className={`bg-gray-50 p-4 rounded-lg cursor-pointer transition-colors ${
                    selectedGroup === group ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => setSelectedGroup(group)}
                >
                  <h3 className="font-medium mb-2">קבוצה {group}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>התקדמות</span>
                      <span className="text-green-600">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: '75%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* אזור הלמידה המרכזי */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">משימה נוכחית</h2>
              <p className="text-gray-600">
                הסבירו את הגורמים העיקריים שהובילו לפרוץ מלחמת העולם השנייה,
                תוך התייחסות להסכם ורסאי והשפעתו.
              </p>
            </div>

            <div className="border-t pt-6">
              <ChatInterface topic={lessonTopic} context={lessonContext} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 