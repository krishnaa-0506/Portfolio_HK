"use client";
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Zap, Trophy } from 'lucide-react';

interface Riddle {
  id: number;
  question: string;
  answer: number;
  hint?: string;
}

const mathRiddles: Riddle[] = [
  // Basic arithmetic (1-25)
  { id: 1, question: "2 + 2 = ?", answer: 4, hint: "Basic addition" },
  { id: 2, question: "10 - 5 = ?", answer: 5, hint: "Simple subtraction" },
  { id: 3, question: "3 × 4 = ?", answer: 12, hint: "Multiplication table" },
  { id: 4, question: "15 ÷ 3 = ?", answer: 5, hint: "Division basics" },
  { id: 5, question: "1 + _ = 2", answer: 1, hint: "What makes 2?" },
  { id: 6, question: "7 + 8 = ?", answer: 15, hint: "Single digit addition" },
  { id: 7, question: "20 - 12 = ?", answer: 8, hint: "Teen subtraction" },
  { id: 8, question: "6 × 7 = ?", answer: 42, hint: "Times table" },
  { id: 9, question: "24 ÷ 6 = ?", answer: 4, hint: "Division by 6" },
  { id: 10, question: "9 + 9 = ?", answer: 18, hint: "Double 9" },
  { id: 11, question: "5 × 5 = ?", answer: 25, hint: "Five squared" },
  { id: 12, question: "30 - 15 = ?", answer: 15, hint: "Half of 30" },
  { id: 13, question: "8 × 3 = ?", answer: 24, hint: "Eight times three" },
  { id: 14, question: "36 ÷ 9 = ?", answer: 4, hint: "Thirty-six divided by nine" },
  { id: 15, question: "12 + 8 = ?", answer: 20, hint: "Teen plus single" },
  { id: 16, question: "25 - 7 = ?", answer: 18, hint: "Twenty-five minus seven" },
  { id: 17, question: "4 × 9 = ?", answer: 36, hint: "Four times nine" },
  { id: 18, question: "45 ÷ 5 = ?", answer: 9, hint: "Forty-five divided by five" },
  { id: 19, question: "11 + 11 = ?", answer: 22, hint: "Double eleven" },
  { id: 20, question: "50 - 25 = ?", answer: 25, hint: "Half of fifty" },
  { id: 21, question: "6 × 6 = ?", answer: 36, hint: "Six squared" },
  { id: 22, question: "42 ÷ 7 = ?", answer: 6, hint: "Forty-two divided by seven" },
  { id: 23, question: "13 + 9 = ?", answer: 22, hint: "Thirteen plus nine" },
  { id: 24, question: "40 - 16 = ?", answer: 24, hint: "Forty minus sixteen" },
  { id: 25, question: "7 × 8 = ?", answer: 56, hint: "Seven times eight" },

  // Two-digit operations (26-50)
  { id: 26, question: "25 + 37 = ?", answer: 62, hint: "Two-digit addition" },
  { id: 27, question: "63 - 28 = ?", answer: 35, hint: "Two-digit subtraction" },
  { id: 28, question: "12 × 8 = ?", answer: 96, hint: "Twelve times eight" },
  { id: 29, question: "84 ÷ 12 = ?", answer: 7, hint: "Eighty-four divided by twelve" },
  { id: 30, question: "48 + 27 = ?", answer: 75, hint: "Forty-eight plus twenty-seven" },
  { id: 31, question: "91 - 46 = ?", answer: 45, hint: "Ninety-one minus forty-six" },
  { id: 32, question: "15 × 6 = ?", answer: 90, hint: "Fifteen times six" },
  { id: 33, question: "72 ÷ 8 = ?", answer: 9, hint: "Seventy-two divided by eight" },
  { id: 34, question: "34 + 29 = ?", answer: 63, hint: "Thirty-four plus twenty-nine" },
  { id: 35, question: "85 - 39 = ?", answer: 46, hint: "Eighty-five minus thirty-nine" },
  { id: 36, question: "11 × 9 = ?", answer: 99, hint: "Eleven times nine" },
  { id: 37, question: "96 ÷ 16 = ?", answer: 6, hint: "Ninety-six divided by sixteen" },
  { id: 38, question: "57 + 38 = ?", answer: 95, hint: "Fifty-seven plus thirty-eight" },
  { id: 39, question: "74 - 25 = ?", answer: 49, hint: "Seventy-four minus twenty-five" },
  { id: 40, question: "13 × 7 = ?", answer: 91, hint: "Thirteen times seven" },
  { id: 41, question: "105 ÷ 15 = ?", answer: 7, hint: "One hundred five divided by fifteen" },
  { id: 42, question: "66 + 34 = ?", answer: 100, hint: "Sixty-six plus thirty-four" },
  { id: 43, question: "88 - 29 = ?", answer: 59, hint: "Eighty-eight minus twenty-nine" },
  { id: 44, question: "14 × 5 = ?", answer: 70, hint: "Fourteen times five" },
  { id: 45, question: "81 ÷ 9 = ?", answer: 9, hint: "Eighty-one divided by nine" },
  { id: 46, question: "45 + 55 = ?", answer: 100, hint: "Forty-five plus fifty-five" },
  { id: 47, question: "92 - 37 = ?", answer: 55, hint: "Ninety-two minus thirty-seven" },
  { id: 48, question: "16 × 4 = ?", answer: 64, hint: "Sixteen times four" },
  { id: 49, question: "90 ÷ 18 = ?", answer: 5, hint: "Ninety divided by eighteen" },
  { id: 50, question: "78 + 22 = ?", answer: 100, hint: "Seventy-eight plus twenty-two" },

  // Squares and powers (51-70)
  { id: 51, question: "8² = ?", answer: 64, hint: "Eight squared" },
  { id: 52, question: "9² = ?", answer: 81, hint: "Nine squared" },
  { id: 53, question: "10² = ?", answer: 100, hint: "Ten squared" },
  { id: 54, question: "11² = ?", answer: 121, hint: "Eleven squared" },
  { id: 55, question: "12² = ?", answer: 144, hint: "Twelve squared" },
  { id: 56, question: "2³ = ?", answer: 8, hint: "Two cubed" },
  { id: 57, question: "3³ = ?", answer: 27, hint: "Three cubed" },
  { id: 58, question: "4³ = ?", answer: 64, hint: "Four cubed" },
  { id: 59, question: "5³ = ?", answer: 125, hint: "Five cubed" },
  { id: 60, question: "2⁴ = ?", answer: 16, hint: "Two to the fourth" },
  { id: 61, question: "3⁴ = ?", answer: 81, hint: "Three to the fourth" },
  { id: 62, question: "√49 = ?", answer: 7, hint: "Square root of forty-nine" },
  { id: 63, question: "√64 = ?", answer: 8, hint: "Square root of sixty-four" },
  { id: 64, question: "√81 = ?", answer: 9, hint: "Square root of eighty-one" },
  { id: 65, question: "√100 = ?", answer: 10, hint: "Square root of one hundred" },
  { id: 66, question: "√121 = ?", answer: 11, hint: "Square root of one hundred twenty-one" },
  { id: 67, question: "√144 = ?", answer: 12, hint: "Square root of one hundred forty-four" },
  { id: 68, question: "13² = ?", answer: 169, hint: "Thirteen squared" },
  { id: 69, question: "14² = ?", answer: 196, hint: "Fourteen squared" },
  { id: 70, question: "15² = ?", answer: 225, hint: "Fifteen squared" },

  // Complex operations (71-90)
  { id: 71, question: "(12 + 8) × 5 = ?", answer: 100, hint: "Parentheses first" },
  { id: 72, question: "50 ÷ 2 + 25 = ?", answer: 50, hint: "Division then addition" },
  { id: 73, question: "3 × (15 - 7) = ?", answer: 24, hint: "Parentheses first, then multiply" },
  { id: 74, question: "100 - 4 × 20 = ?", answer: 20, hint: "Multiplication before subtraction" },
  { id: 75, question: "(8 + 7) × 6 = ?", answer: 90, hint: "Add first, then multiply" },
  { id: 76, question: "144 ÷ (12 × 2) = ?", answer: 6, hint: "Multiply in parentheses first" },
  { id: 77, question: "5 × 8 + 15 = ?", answer: 55, hint: "Multiply then add" },
  { id: 78, question: "120 ÷ 3 - 10 = ?", answer: 30, hint: "Divide then subtract" },
  { id: 79, question: "(25 - 5) ÷ 4 = ?", answer: 5, hint: "Subtract first, then divide" },
  { id: 80, question: "6 × (9 + 6) = ?", answer: 90, hint: "Add in parentheses first" },
  { id: 81, question: "200 - 50 × 3 = ?", answer: 50, hint: "Multiply before subtract" },
  { id: 82, question: "(16 + 4) × 3 = ?", answer: 60, hint: "Add first, then multiply" },
  { id: 83, question: "180 ÷ (9 × 2) = ?", answer: 10, hint: "Multiply in parentheses first" },
  { id: 84, question: "7 × 9 - 8 = ?", answer: 55, hint: "Multiply then subtract" },
  { id: 85, question: "156 ÷ 12 + 7 = ?", answer: 20, hint: "Divide then add" },
  { id: 86, question: "(30 - 6) ÷ 8 = ?", answer: 3, hint: "Subtract first, then divide" },
  { id: 87, question: "4 × (12 + 8) = ?", answer: 80, hint: "Add in parentheses first" },
  { id: 88, question: "250 - 25 × 5 = ?", answer: 125, hint: "Multiply before subtract" },
  { id: 89, question: "(18 + 12) × 2 = ?", answer: 60, hint: "Add first, then multiply" },
  { id: 90, question: "225 ÷ (15 × 3) = ?", answer: 5, hint: "Multiply in parentheses first" },

  // Advanced (91-100)
  { id: 91, question: "25% of 200 = ?", answer: 50, hint: "Quarter of two hundred" },
  { id: 92, question: "50% of 144 = ?", answer: 72, hint: "Half of one forty-four" },
  { id: 93, question: "75% of 80 = ?", answer: 60, hint: "Three quarters of eighty" },
  { id: 94, question: "20% of 150 = ?", answer: 30, hint: "One fifth of one fifty" },
  { id: 95, question: "∛27 = ?", answer: 3, hint: "Cube root of twenty-seven" },
  { id: 96, question: "∛64 = ?", answer: 4, hint: "Cube root of sixty-four" },
  { id: 97, question: "∛125 = ?", answer: 5, hint: "Cube root of one twenty-five" },
  { id: 98, question: "2⁵ = ?", answer: 32, hint: "Two to the fifth power" },
  { id: 99, question: "3⁵ = ?", answer: 243, hint: "Three to the fifth power" },
  { id: 100, question: "fibonacci(6) = ?", answer: 8, hint: "Sixth Fibonacci number" },
];

const InteractiveRiddleSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [currentRiddle, setCurrentRiddle] = useState<Riddle>(mathRiddles[0]);
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [solvedRiddles, setSolvedRiddles] = useState<Set<number>>(new Set());
  const [showHint, setShowHint] = useState<boolean>(false);
  const [bulbGlow, setBulbGlow] = useState<boolean>(false);
  const [pageGlow, setPageGlow] = useState<boolean>(false);
  const [streak, setStreak] = useState<number>(0);

  // Ensure component only renders after client-side hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="py-16 sm:py-24 bg-transparent relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              🧠 Interactive Math Challenge
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Loading interactive riddles...
            </p>
          </div>
        </div>
      </section>
    );
  }

  const getRandomUnsolvedRiddle = () => {
    const unsolvedRiddles = mathRiddles.filter(r => !solvedRiddles.has(r.id));
    
    if (unsolvedRiddles.length === 0) {
      // All riddles solved, pick random
      const randomIndex = Math.floor(Math.random() * mathRiddles.length);
      return mathRiddles[randomIndex];
    } else {
      const randomIndex = Math.floor(Math.random() * unsolvedRiddles.length);
      return unsolvedRiddles[randomIndex];
    }
  };

  const checkAnswer = () => {
    if (!mounted) return; // Prevent execution during SSR
    
    const numAnswer = parseFloat(userAnswer);
    if (numAnswer === currentRiddle.answer) {
      setIsCorrect(true);
      setBulbGlow(true);
      setPageGlow(true);
      setSolvedRiddles(prev => new Set([...prev, currentRiddle.id]));
      setStreak(prev => prev + 1);
      
      // Auto-advance to next riddle after 2 seconds
      setTimeout(() => {
        setCurrentRiddle(getRandomUnsolvedRiddle());
        setUserAnswer("");
        setIsCorrect(null);
        setBulbGlow(false);
        setPageGlow(false);
        setShowHint(false);
      }, 2000);
      
      // Turn off bulb glow after 1 second
      setTimeout(() => {
        setBulbGlow(false);
      }, 1000);
    } else {
      setIsCorrect(false);
      setStreak(0);
      setTimeout(() => {
        setIsCorrect(null);
      }, 1500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (!mounted) return; // Prevent execution during SSR
    if (e.key === 'Enter') {
      checkAnswer();
    }
  };

  return (
    <>
      {/* Full Page Glow Overlay */}
      {pageGlow && (
        <div className="fixed inset-0 pointer-events-none z-40">
          <div className="absolute inset-0 bg-yellow-400/10 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-radial from-yellow-300/20 via-yellow-400/10 to-transparent animate-pulse"></div>
        </div>
      )}
      
      <section className="py-16 sm:py-24 bg-transparent relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              🧠 Interactive Math Challenge
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Solve the riddles to light up the entire page! Test your mathematical skills with 100 unique challenges.
            </p>
            
            {/* Streak Counter */}
            <div className="mb-6">
              <Badge variant="outline" className="text-yellow-400 border-yellow-400 px-4 py-2">
                <Zap className="w-4 h-4 mr-2" />
                Streak: {streak}
              </Badge>
            </div>
          </div>

          {/* Main Riddle Card */}
          <div className="max-w-2xl mx-auto">
            <Card className="bg-black/20 backdrop-blur-sm border-white/20 shadow-2xl">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className={`relative ${bulbGlow ? 'animate-pulse' : ''}`}>
                    <Lightbulb 
                      className={`w-20 h-20 transition-all duration-500 ${
                        bulbGlow 
                          ? 'text-yellow-400 drop-shadow-[0_0_30px_rgba(255,255,0,1)]' 
                          : 'text-gray-500'
                      }`}
                    />
                    {bulbGlow && (
                      <div className="absolute inset-0 w-20 h-20 bg-yellow-400/40 rounded-full blur-2xl animate-pulse"></div>
                    )}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="text-center space-y-6">
                <div className="text-3xl font-bold text-white bg-white/10 rounded-lg p-6">
                  {currentRiddle.question}
                </div>
                
                <div className="flex gap-4 justify-center items-center">
                  <Input
                    type="number"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Your answer..."
                    className="max-w-40 text-center text-lg bg-white/10 border-white/20 text-white placeholder-gray-400"
                  />
                  <Button 
                    onClick={checkAnswer}
                    disabled={!userAnswer}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                  >
                    Light the Page! 💡
                  </Button>
                </div>

                {/* Feedback */}
                {isCorrect === true && (
                  <div className="text-green-400 text-xl font-bold animate-bounce">
                    🎉 Correct! The page is glowing! ✨
                  </div>
                )}
                
                {isCorrect === false && (
                  <div className="text-red-400 text-xl font-bold">
                    ❌ Not quite right. Try again!
                  </div>
                )}

                {/* Hint Button */}
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowHint(!showHint)}
                    className="text-gray-300 border-gray-500 hover:bg-white/10"
                  >
                    💡 {showHint ? 'Hide' : 'Show'} Hint
                  </Button>
                  
                  {showHint && currentRiddle.hint && (
                    <div className="text-gray-400 text-sm bg-white/5 rounded-lg p-3">
                      {currentRiddle.hint}
                    </div>
                  )}
                </div>

                {/* Next Riddle Button */}
                <Button
                  variant="outline"
                  onClick={() => {
                    setCurrentRiddle(getRandomUnsolvedRiddle());
                    setUserAnswer("");
                    setIsCorrect(null);
                    setBulbGlow(false);
                    setPageGlow(false);
                    setShowHint(false);
                  }}
                  className="text-white border-white/20 hover:bg-white/10"
                >
                  🔄 Next Riddle
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Achievement Badge */}
          {solvedRiddles.size > 0 && (
            <div className="text-center mt-8">
              <Badge variant="outline" className="text-purple-400 border-purple-400 px-6 py-2 text-lg">
                <Trophy className="w-5 h-5 mr-2" />
                Math Genius: {solvedRiddles.size} Riddles Solved!
              </Badge>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default InteractiveRiddleSection;