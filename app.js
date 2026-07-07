// Pre-load speech synthesis voices immediately at the top level
if (typeof speechSynthesis !== 'undefined') {
  speechSynthesis.getVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = () => {
      speechSynthesis.getVoices();
    };
  }
}

// Game Assets and Datasets
const emojis = {
  fruits: ['🍎', '🍌', '🍓', '🍒', '🍊', '🍉', '🍇', '🍍'],
  animals: ['🐻', '🦁', '🐸', '🐱', '🐶', '🐰', '🐼', '🦊'],
  items: ['🎈', '🚗', '✈️', '🎁', '⭐', '🍦', '🍭', '🌸']
};

const thaiAlphabet = [
  { letter: 'ก', word: 'ไก่', emoji: '🐔', audioText: 'กอ ไก่' },
  { letter: 'ข', word: 'ไข่', emoji: '🥚', audioText: 'ขอ ไข่' },
  { letter: 'ค', word: 'ควาย', emoji: '🐃', audioText: 'คอ ควาย' },
  { letter: 'ง', word: 'งู', emoji: '🐍', audioText: 'งอ งู' },
  { letter: 'จ', word: 'จาน', emoji: '🍽️', audioText: 'จอ จาน' },
  { letter: 'ช', word: 'ช้าง', emoji: '🐘', audioText: 'ชอ ช้าง' },
  { letter: 'ด', word: 'เด็ก', emoji: '👶', audioText: 'ดอ เด็ก' },
  { letter: 'ต', word: 'เต่า', emoji: '🐢', audioText: 'ตอ เต่า' },
  { letter: 'ท', word: 'ทหาร', emoji: '💂', audioText: 'ทอ ทหาร' },
  { letter: 'น', word: 'หนู', emoji: '🐭', audioText: 'นอ หนู' },
  { letter: 'บ', word: 'ใบไม้', emoji: '🍃', audioText: 'บอ ใบไม้' },
  { letter: 'ป', word: 'ปลา', emoji: '🐟', audioText: 'ปอ ปลา' },
  { letter: 'ผ', word: 'ผึ้ง', emoji: '🐝', audioText: 'ผอ ผึ้ง' },
  { letter: 'ม', word: 'ม้า', emoji: '🐎', audioText: 'มอ ม้า' },
  { letter: 'ย', word: 'ยักษ์', emoji: '👹', audioText: 'ยอ ยักษ์' },
  { letter: 'ร', word: 'เรือ', emoji: '🚢', audioText: 'รอ เรือ' },
  { letter: 'ล', word: 'ลิง', emoji: '🐒', audioText: 'ลอ ลิง' },
  { letter: 'ว', word: 'แหวน', emoji: '💍', audioText: 'วอ แหวน' },
  { letter: 'ส', word: 'เสือ', emoji: '🐯', audioText: 'สอ เสือ' },
  { letter: 'ห', word: 'หีบ', emoji: '📦', audioText: 'หอ หีบ' },
  { letter: 'อ', word: 'อ่าง', emoji: '🛁', audioText: 'ออ อ่าง' },
  { letter: 'ฮ', word: 'นกฮูก', emoji: '🦉', audioText: 'ฮอ นกฮูก' }
];

const englishAlphabet = [
  { letter: 'A', word: 'Apple', emoji: '🍎', audioText: 'A for Apple' },
  { letter: 'B', word: 'Bear', emoji: '🐻', audioText: 'B for Bear' },
  { letter: 'C', word: 'Cat', emoji: '🐱', audioText: 'C for Cat' },
  { letter: 'D', word: 'Dog', emoji: '🐶', audioText: 'D for Dog' },
  { letter: 'E', word: 'Elephant', emoji: '🐘', audioText: 'E for Elephant' },
  { letter: 'F', word: 'Fish', emoji: '🐟', audioText: 'F for Fish' },
  { letter: 'G', word: 'Grapes', emoji: '🍇', audioText: 'G for Grapes' },
  { letter: 'H', word: 'House', emoji: '🏠', audioText: 'H for House' },
  { letter: 'I', word: 'Ice Cream', emoji: '🍦', audioText: 'I for Ice Cream' },
  { letter: 'L', word: 'Lion', emoji: '🦁', audioText: 'L for Lion' },
  { letter: 'M', word: 'Monkey', emoji: '🐒', audioText: 'M for Monkey' },
  { letter: 'O', word: 'Owl', emoji: '🦉', audioText: 'O for Owl' },
  { letter: 'P', word: 'Panda', emoji: '🐼', audioText: 'P for Panda' },
  { letter: 'R', word: 'Rabbit', emoji: '🐰', audioText: 'R for Rabbit' },
  { letter: 'S', word: 'Sun', emoji: '☀️', audioText: 'S for Sun' },
  { letter: 'T', word: 'Tiger', emoji: '🐯', audioText: 'T for Tiger' },
  { letter: 'U', word: 'Umbrella', emoji: '☂️', audioText: 'U for Umbrella' },
  { letter: 'W', word: 'Watermelon', emoji: '🍉', audioText: 'W for Watermelon' },
  { letter: 'Z', word: 'Zebra', emoji: '🦓', audioText: 'Z for Zebra' }
];

const shapes = [
  { 
    nameTh: 'วงกลม', 
    nameEn: 'Circle', 
    audioTh: 'วงกลม', 
    audioEn: 'Circle',
    svg: `<svg viewBox="0 0 100 100" class="svg-shape"><circle cx="50" cy="50" r="40" fill="var(--pastel-pink)" /></svg>`
  },
  { 
    nameTh: 'สามเหลี่ยม', 
    nameEn: 'Triangle', 
    audioTh: 'สามเหลี่ยม', 
    audioEn: 'Triangle',
    svg: `<svg viewBox="0 0 100 100" class="svg-shape"><polygon points="50,15 90,85 10,85" fill="var(--pastel-orange)" /></svg>`
  },
  { 
    nameTh: 'สี่เหลี่ยม', 
    nameEn: 'Square', 
    audioTh: 'สี่เหลี่ยม', 
    audioEn: 'Square',
    svg: `<svg viewBox="0 0 100 100" class="svg-shape"><rect x="15" y="15" width="70" height="70" rx="12" fill="var(--pastel-green)" /></svg>`
  },
  { 
    nameTh: 'ดาว', 
    nameEn: 'Star', 
    audioTh: 'ดาว', 
    audioEn: 'Star',
    svg: `<svg viewBox="0 0 100 100" class="svg-shape"><polygon points="50,10 63,38 93,38 70,57 78,87 50,70 22,87 30,57 7,38 37,38" fill="var(--pastel-yellow)" /></svg>`
  },
  { 
    nameTh: 'หัวใจ', 
    nameEn: 'Heart', 
    audioTh: 'หัวใจ', 
    audioEn: 'Heart',
    svg: `<svg viewBox="0 0 100 100" class="svg-shape"><path d="M50,30 C50,30 38,15 25,15 C10,15 10,35 10,35 C10,55 35,75 50,85 C65,75 90,55 90,35 C90,35 90,15 75,15 C62,15 50,30 50,30 Z" fill="var(--pastel-pink)" /></svg>`
  },
  { 
    nameTh: 'วงรี', 
    nameEn: 'Oval', 
    audioTh: 'วงรี', 
    audioEn: 'Oval',
    svg: `<svg viewBox="0 0 100 100" class="svg-shape"><ellipse cx="50" cy="50" rx="42" ry="25" fill="var(--pastel-blue)" /></svg>`
  },
  { 
    nameTh: 'สี่เหลี่ยมผืนผ้า', 
    nameEn: 'Rectangle', 
    audioTh: 'สี่เหลี่ยมผืนผ้า', 
    audioEn: 'Rectangle',
    svg: `<svg viewBox="0 0 100 100" class="svg-shape"><rect x="10" y="25" width="80" height="50" rx="8" fill="var(--pastel-purple)" /></svg>`
  }
];

const colorGameData = [
  { nameTh: 'สีแดง', nameEn: 'Red', hex: '#ff5c5c', audioTh: 'สีแดง', audioEn: 'Red' },
  { nameTh: 'สีน้ำเงิน', nameEn: 'Blue', hex: '#3b82f6', audioTh: 'สีน้ำเงิน', audioEn: 'Blue' },
  { nameTh: 'สีเขียว', nameEn: 'Green', hex: '#10b981', audioTh: 'สีเขียว', audioEn: 'Green' },
  { nameTh: 'สีเหลือง', nameEn: 'Yellow', hex: '#fbbf24', audioTh: 'สีเหลือง', audioEn: 'Yellow' },
  { nameTh: 'สีส้ม', nameEn: 'Orange', hex: '#f97316', audioTh: 'สีส้ม', audioEn: 'Orange' },
  { nameTh: 'สีชมพู', nameEn: 'Pink', hex: '#ec4899', audioTh: 'สีชมพู', audioEn: 'Pink' },
  { nameTh: 'สีม่วง', nameEn: 'Purple', hex: '#8b5cf6', audioTh: 'สีม่วง', audioEn: 'Purple' },
  { nameTh: 'สีขาว', nameEn: 'White', hex: '#ffffff', audioTh: 'สีขาว', audioEn: 'White' },
  { nameTh: 'สีดำ', nameEn: 'Black', hex: '#1f2937', audioTh: 'สีดำ', audioEn: 'Black' },
  { nameTh: 'สีน้ำตาล', nameEn: 'Brown', hex: '#78350f', audioTh: 'สีน้ำตาล', audioEn: 'Brown' }
];

const animalFoodData = [
  { animal: 'กระต่าย', emojiAnimal: '🐰', food: 'แครอท', emojiFood: '🥕', audioAnimal: 'กระต่าย', audioFood: 'แครอท' },
  { animal: 'ลิง', emojiAnimal: '🐒', food: 'กล้วย', emojiFood: '🍌', audioAnimal: 'ลิง', audioFood: 'กล้วย' },
  { animal: 'แมว', emojiAnimal: '🐱', food: 'ปลา', emojiFood: '🐟', audioAnimal: 'แมว', audioFood: 'ปลา' },
  { animal: 'สุนัข', emojiAnimal: '🐶', food: 'กระดูก', emojiFood: '🍖', audioAnimal: 'สุนัข', audioFood: 'กระดูก' },
  { animal: 'หมีแพนด้า', emojiAnimal: '🐼', food: 'ใบไผ่', emojiFood: '🎋', audioAnimal: 'หมีแพนด้า', audioFood: 'ใบไผ่' },
  { animal: 'ผึ้ง', emojiAnimal: '🐝', food: 'ดอกไม้', emojiFood: '🌸', audioAnimal: 'ผึ้ง', audioFood: 'ดอกไม้' },
  { animal: 'วัว', emojiAnimal: '🐄', food: 'หญ้า', emojiFood: '🌾', audioAnimal: 'วัว', audioFood: 'หญ้า' },
  { animal: 'นก', emojiAnimal: '🐦', food: 'หนอน', emojiFood: '🐛', audioAnimal: 'นก', audioFood: 'หนอน' },
  { animal: 'หนู', emojiAnimal: '🐭', food: 'ชีส', emojiFood: '🧀', audioAnimal: 'หนู', audioFood: 'ชีส' },
  { animal: 'กระรอก', emojiAnimal: '🐿️', food: 'ลูกนัท', emojiFood: '🥜', audioAnimal: 'กระรอก', audioFood: 'ลูกนัท' }
];

const sizeAnimals = [
  { name: 'มด', emoji: '🐜', size: 1, audio: 'มด' },
  { name: 'หนู', emoji: '🐭', size: 2, audio: 'หนู' },
  { name: 'กระต่าย', emoji: '🐰', size: 3, audio: 'กระต่าย' },
  { name: 'สุนัข', emoji: '🐶', size: 4, audio: 'สุนัข' },
  { name: 'สิงโต', emoji: '🦁', size: 5, audio: 'สิงโต' },
  { name: 'ม้า', emoji: '🐎', size: 6, audio: 'ม้า' },
  { name: 'ช้าง', emoji: '🐘', size: 7, audio: 'ช้าง' },
  { name: 'วาฬ', emoji: '🐋', size: 8, audio: 'วาฬ' }
];

// Mascot phrases
const mascotPhrases = {
  welcome: [
    "ยินดีต้อนรับจ้าหนูๆ! กดปุ่มเริ่มเล่นเพื่อไปสนุกกันเลย! 🐻",
    "พี่หมีรออยู่เลยจ้า! กดเล่นกันเถอะนะ! 🐻🎒"
  ],
  menu: [
    "หนูๆ อยากฝึกฝนเรื่องอะไรจ๊ะ? จิ้มเลือกได้เลยนะ! 🐻",
    "วันนี้เล่นเกมไหนดีนะ? ทุกเกมน่ารักและสนุกมากๆ เลย! 🐻✨"
  ],
  correct: [
    "เย้! ถูกต้องแล้วจ้า หนูเก่งมากๆ! ⭐🐻",
    "ว้าว! สุดยอดเลย ตอบถูกอีกแล้วนะ 🐻🎉",
    "เก่งที่สุดเลย! รับคะแนนไปเล้ย! 🐻✨"
  ],
  incorrect: [
    "โอ๊ะโอ! ยังไม่ถูกนะจ๊ะ ไม่เป็นไร ลองอีกครั้งซิ! 🐻❤️",
    "เกือบถูกแล้ว! ลองดูข้ออื่นอีกทีน้า พี่หมีเอาใจช่วย! 🐻✌️"
  ],
  question: [
    "ติ๊กต็อกๆ ข้อนี้ตอบอะไรดีนะ? 🐻",
    "มาลองคิดข้อนี้กันจ้า คนเก่งตอบปุ่มไหนเอ่ย? 🐻🌱",
    "ตั้งใจดูดีๆ น้า ปุ่มไหนคือคำตอบที่ถูกต้องจ๊ะ? 🐻"
  ],
  score: [
    "เย้! เล่นครบทุกด่านแล้ว หนูยอดเยี่ยมที่สุดในโลกเลย! 🏆🐻",
    "เก่งมากๆ เลยครับ! มาปรบมือให้ตัวเองดังๆ เลย! 🐻🎉"
  ]
};

// Game State variables
let currentScreen = 'screen-welcome';
let currentGameMode = '';
let currentQuestionIndex = 0;
let score = 0;
const totalQuestions = 20;
let gameQuestions = [];
let currentCorrectAnswer = null;
let isSoundMuted = false;
let audioCtx = null;
let lastSpokenText = '';
let lastSpokenLang = 'th-TH';
let selectedVoiceGender = 'female'; // Default to female

// Memory Game State variables
let memoryCardsData = [];
let firstCard = null;
let secondCard = null;
let canFlipMemoryCard = true;
let memoryMatchedPairs = 0;
const totalMemoryPairs = 6;

// UI Elements
const screens = {
  welcome: document.getElementById('screen-welcome'),
  menu: document.getElementById('screen-menu'),
  game: document.getElementById('screen-game'),
  score: document.getElementById('screen-score')
};

const btnStartGame = document.getElementById('btn-start-game');
const btnHome = document.getElementById('btn-home');
const btnSound = document.getElementById('btn-sound');
const btnRepeatVoice = document.getElementById('btn-repeat-voice');
const menuCards = document.querySelectorAll('.menu-card');
const optionButtons = [
  document.getElementById('opt-0'),
  document.getElementById('opt-1'),
  document.getElementById('opt-2'),
  document.getElementById('opt-3')
];
const textScore = document.getElementById('game-score');
const textLevel = document.getElementById('game-level');
const progressBar = document.getElementById('game-progress');
const questionPrompt = document.getElementById('question-prompt');
const questionDisplay = document.getElementById('question-display');
const finalScoreText = document.getElementById('final-score');
const btnRestart = document.getElementById('btn-restart');
const btnGoHome = document.getElementById('btn-go-home');

const mascotChar = document.getElementById('mascot-character');
const mascotBubble = document.getElementById('mascot-bubble');

// Confetti Setup
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
let confettiAnimationId = null;

// Initialize Web Audio API safely after first touch
function initAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

// Speak text using Web Speech API
function speakText(text, lang = 'th-TH') {
  lastSpokenText = text;
  lastSpokenLang = lang;

  if (isSoundMuted) return;

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  
  const isFemale = selectedVoiceGender === 'female';
  utterance.rate = isFemale ? 0.95 : 0.90; // Slightly slower for male voice
  utterance.pitch = isFemale ? 1.65 : 1.05; // 1.65 for little girl, 1.05 for normal male voice

  const voices = window.speechSynthesis.getVoices();
  const langMatch = lang.split('-')[0].toLowerCase();
  const langVoices = voices.filter(v => v.lang.toLowerCase().startsWith(langMatch));
  
  let matchedVoice = null;
  const maleKeywords = ['hemant', 'heman', 'niwat', 'male', 'boy', 'david', 'george', 'mark', 'ravi', 'sean'];
  
  if (langMatch === 'th') {
    if (isFemale) {
      // Look for Narisa, Pattara, Kanya, Premwadee, Achara or generic female/Google Thai voices
      matchedVoice = langVoices.find(v => {
        const name = v.name.toLowerCase();
        const isExplicitFemale = name.includes('pattara') || name.includes('premwadee') || 
                                 name.includes('achara') || name.includes('narisa') || 
                                 name.includes('kanya') || name.includes('google') || 
                                 name.includes('female') || name.includes('natural');
        const isExplicitMale = maleKeywords.some(kw => name.includes(kw));
        return isExplicitFemale && !isExplicitMale;
      });
    } else {
      // Look for Hemant, Niwat, Heman, etc.
      matchedVoice = langVoices.find(v => {
        const name = v.name.toLowerCase();
        return maleKeywords.some(kw => name.includes(kw));
      });
    }
  } else {
    if (isFemale) {
      matchedVoice = langVoices.find(v => {
        const name = v.name.toLowerCase();
        const isExplicitFemale = name.includes('zira') || name.includes('samantha') || 
                                 name.includes('karen') || name.includes('hazel') || 
                                 name.includes('female') || name.includes('google');
        const isExplicitMale = maleKeywords.some(kw => name.includes(kw));
        return isExplicitFemale && !isExplicitMale;
      });
    } else {
      // English male voice: David, George, Mark, Ravi
      matchedVoice = langVoices.find(v => {
        const name = v.name.toLowerCase();
        return name.includes('david') || name.includes('george') || name.includes('mark') || name.includes('male');
      });
    }
  }

  // Fallback: If no match found for the requested gender, try to find any matching language voice
  if (!matchedVoice && langVoices.length > 0) {
    if (isFemale) {
      matchedVoice = langVoices.find(v => !maleKeywords.some(kw => v.name.toLowerCase().includes(kw))) || langVoices[0];
    } else {
      matchedVoice = langVoices.find(v => maleKeywords.some(kw => v.name.toLowerCase().includes(kw))) || langVoices[0];
    }
  }

  if (matchedVoice) {
    utterance.voice = matchedVoice;
    console.log("Selected voice (" + selectedVoiceGender + "):", matchedVoice.name);
  } else {
    console.log("Using browser default voice for:", lang);
  }

  window.speechSynthesis.speak(utterance);
}

// Generate simple synth sound effects with Web Audio API (Offline safe!)
function playSoundEffect(type) {
  if (isSoundMuted) return;
  initAudioContext();

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  
  osc.connect(gain);
  gain.connect(audioCtx.destination);

  const now = audioCtx.currentTime;

  if (type === 'correct') {
    // Ding Dong Sound (C5 followed by E5)
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(523.25, now); // C5
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.3, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
    osc.start(now);
    osc.stop(now + 0.3);

    setTimeout(() => {
      if (isSoundMuted) return;
      const osc2 = audioCtx.createOscillator();
      const gain2 = audioCtx.createGain();
      osc2.connect(gain2);
      gain2.connect(audioCtx.destination);
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(659.25, audioCtx.currentTime); // E5
      gain2.gain.setValueAtTime(0, audioCtx.currentTime);
      gain2.gain.linearRampToValueAtTime(0.3, audioCtx.currentTime + 0.05);
      gain2.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.35);
      osc2.start(audioCtx.currentTime);
      osc2.stop(audioCtx.currentTime + 0.4);
    }, 150);

  } else if (type === 'incorrect') {
    // Soft buzzer/boing sound descending pitch
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.exponentialRampToValueAtTime(80, now + 0.3);
    
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.2, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
    
    osc.start(now);
    osc.stop(now + 0.4);
  } else if (type === 'click') {
    // Short bubbly pop sound
    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, now);
    osc.frequency.exponentialRampToValueAtTime(1000, now + 0.08);
    
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.15, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
    
    osc.start(now);
    osc.stop(now + 0.12);
  }
}

// Confetti Class and Functions
function resizeCanvas() {
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;
}

class ConfettiParticle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = -20 - Math.random() * 100;
    this.size = Math.random() * 10 + 6;
    this.color = ['#ffb7b2', '#ffdac1', '#fff9a6', '#b5ead7', '#c7ceea', '#e2cbf7'][Math.floor(Math.random() * 6)];
    this.speedX = Math.random() * 5 - 2.5;
    this.speedY = Math.random() * 5 + 4;
    this.rotation = Math.random() * 360;
    this.rotationSpeed = Math.random() * 8 - 4;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.rotation += this.rotationSpeed;
  }
  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate((this.rotation * Math.PI) / 180);
    ctx.fillStyle = this.color;
    ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
    ctx.restore();
  }
}

function startConfetti() {
  resizeCanvas();
  particles = Array.from({ length: 60 }, () => new ConfettiParticle());
  if (confettiAnimationId) cancelAnimationFrame(confettiAnimationId);
  animateConfetti();
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let hasActiveParticles = false;
  
  particles.forEach(p => {
    p.update();
    p.draw();
    if (p.y < canvas.height) {
      hasActiveParticles = true;
    }
  });

  if (hasActiveParticles) {
    confettiAnimationId = requestAnimationFrame(animateConfetti);
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

// Function to load and update high scores on the main menu cards
function updateMainMenuHighScores() {
  const modes = ['numbers', 'thai', 'english', 'shapes', 'colors', 'memory', 'food', 'size'];
  modes.forEach(mode => {
    const key = `highscore_${mode}`;
    const high = localStorage.getItem(key) || 0;
    const el = document.getElementById(`high-score-${mode}`);
    if (el) {
      const max = mode === 'memory' ? totalMemoryPairs : totalQuestions;
      el.textContent = `คะแนนสูงสุด: ${high}/${max}`;
    }
  });
}

// Navigation between screens
function navigateTo(screenId) {
  // Hide all screens
  Object.values(screens).forEach(screen => screen.classList.add('hidden'));
  
  // Show selected screen
  screens[screenId].classList.remove('hidden');
  currentScreen = screenId;

  // Manage Home button visibility
  if (screenId === 'welcome' || screenId === 'menu') {
    btnHome.classList.add('hidden');
  } else {
    btnHome.classList.remove('hidden');
  }

  // Set Mascot message based on screen
  if (screenId === 'welcome') {
    setMascotPhrase('welcome');
  } else if (screenId === 'menu') {
    setMascotPhrase('menu');
    updateMainMenuHighScores();
  } else if (screenId === 'score') {
    setMascotPhrase('score');
  }
}

// Set mascot speech text and speak it
function setMascotPhrase(type) {
  const list = mascotPhrases[type];
  const phrase = list[Math.floor(Math.random() * list.length)];
  mascotBubble.textContent = phrase;
  speakText(phrase, 'th-TH');
}

// Helper to shuffle arrays
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Generate unique choices including the correct answer
function generateChoices(correctAnswer, allOptions, keyName, size = 4) {
  let choices = [correctAnswer];
  const pool = allOptions.filter(item => item[keyName] !== correctAnswer[keyName]);
  const shuffledPool = shuffleArray(pool);
  
  for (let i = 0; i < size - 1 && i < shuffledPool.length; i++) {
    choices.push(shuffledPool[i]);
  }
  
  return shuffleArray(choices);
}

// --- GAME LOGIC GENERATORS ---

// 1. Numbers Game generator
function generateNumbersQuestions() {
  const questions = [];
  const emojiCategories = Object.keys(emojis);

  for (let i = 0; i < totalQuestions; i++) {
    const number = Math.floor(Math.random() * 10) + 1; // 1 to 10
    const cat = emojiCategories[Math.floor(Math.random() * emojiCategories.length)];
    const emoji = emojis[cat][Math.floor(Math.random() * emojis[cat].length)];
    
    // Distractors
    const choices = [number];
    while (choices.length < 4) {
      const rand = Math.floor(Math.random() * 10) + 1;
      if (!choices.includes(rand)) {
        choices.push(rand);
      }
    }

    questions.push({
      prompt: 'นับซิ มีอยู่กี่อันนะ?',
      type: 'count',
      emoji: emoji,
      count: number,
      choices: shuffleArray(choices),
      correctAnswer: number
    });
  }
  return questions;
}

// 2. Thai Game Generator
function generateThaiQuestions() {
  const questions = [];
  const shuffledThai = shuffleArray(thaiAlphabet);

  for (let i = 0; i < totalQuestions; i++) {
    const current = shuffledThai[i % shuffledThai.length];
    const questionType = Math.random() > 0.5 ? 'letter-to-pic' : 'pic-to-letter';

    if (questionType === 'letter-to-pic') {
      const choices = generateChoices(current, thaiAlphabet, 'letter');
      questions.push({
        prompt: `ตัวอักษร "${current.letter}" คู่กับรูปไหนเอ่ย?`,
        speakPrompt: `ตัวอักษร ${current.audioText} คู่กับรูปไหนเอ่ย`,
        type: questionType,
        display: current.letter,
        choices: choices,
        correctAnswer: current,
        displayKey: 'emoji',
        speechCorrect: `เก่งมาก! ${current.letter} ${current.word}`
      });
    } else {
      const choices = generateChoices(current, thaiAlphabet, 'letter');
      questions.push({
        prompt: `รูปภาพนี้คู่กับตัวอักษรใดเอ่ย?`,
        speakPrompt: `รูป ${current.word} คู่กับตัวอักษรใดเอ่ย`,
        type: questionType,
        display: current.emoji,
        choices: choices,
        correctAnswer: current,
        displayKey: 'letter',
        speechCorrect: `เก่งมาก! ${current.letter} ${current.word}`
      });
    }
  }
  return questions;
}

// 3. English Game Generator
function generateEnglishQuestions() {
  const questions = [];
  const shuffledEng = shuffleArray(englishAlphabet);

  for (let i = 0; i < totalQuestions; i++) {
    const current = shuffledEng[i % shuffledEng.length];
    const questionType = Math.random() > 0.5 ? 'letter-to-pic' : 'pic-to-letter';

    if (questionType === 'letter-to-pic') {
      const choices = generateChoices(current, englishAlphabet, 'letter');
      questions.push({
        prompt: `Which picture starts with letter "${current.letter}"?`,
        speakPrompt: `Which picture starts with letter ${current.letter}?`,
        type: questionType,
        display: current.letter,
        choices: choices,
        correctAnswer: current,
        displayKey: 'emoji',
        displayKeySub: 'word',
        speechCorrect: `Great job! ${current.audioText}`,
        speakLang: 'en-US'
      });
    } else {
      const choices = generateChoices(current, englishAlphabet, 'letter');
      questions.push({
        prompt: `Which letter matches this picture?`,
        speakPrompt: `Which letter matches the picture of ${current.word}?`,
        type: questionType,
        display: current.emoji,
        displaySub: current.word,
        choices: choices,
        correctAnswer: current,
        displayKey: 'letter',
        speechCorrect: `Great job! ${current.letter} for ${current.word}`,
        speakLang: 'en-US'
      });
    }
  }
  return questions;
}

// 4. Shapes Game Generator
function generateShapesQuestions() {
  const questions = [];
  
  for (let i = 0; i < totalQuestions; i++) {
    // Pick a shape
    const current = shapes[Math.floor(Math.random() * shapes.length)];
    const choices = generateChoices(current, shapes, 'nameTh');

    questions.push({
      prompt: 'รูปทรงนี้คือรูปทรงอะไรเอ่ย?',
      speakPrompt: 'รูปทรงนี้คือรูปทรงอะไรเอ่ย',
      type: 'shape',
      display: current.svg,
      choices: choices,
      correctAnswer: current,
      displayKey: 'nameTh',
      displayKeySub: 'nameEn',
      speechCorrect: `เก่งมาก! นี่คือ ${current.audioTh}... ${current.audioEn}`,
      speakLang: 'th-TH' // Read correct text in Thai and English
    });
  }
  return questions;
}

// 5. Colors Game Generator
function generateColorsQuestions() {
  const questions = [];
  for (let i = 0; i < totalQuestions; i++) {
    const current = colorGameData[Math.floor(Math.random() * colorGameData.length)];
    const choices = generateChoices(current, colorGameData, 'nameTh');
    questions.push({
      prompt: 'สีนี้คือสีอะไรเอ่ย?',
      speakPrompt: 'สีนี้คือสีอะไรเอ่ย',
      type: 'color',
      display: current,
      choices: choices,
      correctAnswer: current,
      displayKey: 'nameTh',
      displayKeySub: 'nameEn',
      speechCorrect: `เก่งมาก! นี่คือ ${current.audioTh}... ${current.audioEn}`,
      speakLang: 'th-TH'
    });
  }
  return questions;
}

// 6. Animal Food Game Generator
function generateFoodQuestions() {
  const questions = [];
  const shuffledFood = shuffleArray(animalFoodData);
  for (let i = 0; i < totalQuestions; i++) {
    const current = shuffledFood[i % shuffledFood.length];
    const choices = generateChoices(current, animalFoodData, 'animal');
    questions.push({
      prompt: `${current.emojiAnimal} ${current.animal} กินอะไรเป็นอาหารนะ?`,
      speakPrompt: `${current.animal} กินอะไรเป็นอาหารนะ`,
      type: 'food',
      display: current.emojiAnimal,
      choices: choices,
      correctAnswer: current,
      displayKey: 'emojiFood',
      displayKeySub: 'food',
      speechCorrect: `เก่งมาก! ${current.animal} กิน ${current.food} จ้า`,
      speakLang: 'th-TH'
    });
  }
  return questions;
}

// 7. Size Game Generator
function generateSizeQuestions() {
  const questions = [];
  for (let i = 0; i < totalQuestions; i++) {
    let a1 = sizeAnimals[Math.floor(Math.random() * sizeAnimals.length)];
    let a2 = sizeAnimals[Math.floor(Math.random() * sizeAnimals.length)];
    while (a1.name === a2.name) {
      a2 = sizeAnimals[Math.floor(Math.random() * sizeAnimals.length)];
    }
    
    const askBigger = Math.random() > 0.5;
    const correctAnswer = askBigger 
      ? (a1.size > a2.size ? a1 : a2)
      : (a1.size < a2.size ? a1 : a2);
    
    const choices = [a1, a2];
    
    questions.push({
      prompt: askBigger 
        ? `ตัวไหนตัวใหญ่กว่ากันนะระหว่าง ${a1.emoji} กับ ${a2.emoji}?`
        : `ตัวไหนตัวเล็กกว่ากันนะระหว่าง ${a1.emoji} กับ ${a2.emoji}?`,
      speakPrompt: askBigger
        ? `ตัวไหนตัวใหญ่กว่ากันนะ`
        : `ตัวไหนตัวเล็กกว่ากันนะ`,
      type: 'size',
      display: { a1, a2 },
      choices: choices,
      correctAnswer: correctAnswer,
      displayKey: 'emoji',
      displayKeySub: 'name',
      speechCorrect: `เก่งมาก! ${correctAnswer.name} นั่นเอง`,
      speakLang: 'th-TH'
    });
  }
  return questions;
}

// Start a game mode
function startGame(mode) {
  initAudioContext();
  currentGameMode = mode;
  currentQuestionIndex = 0;
  score = 0;
  
  // Set question list
  if (mode === 'numbers') {
    gameQuestions = generateNumbersQuestions();
  } else if (mode === 'thai') {
    gameQuestions = generateThaiQuestions();
  } else if (mode === 'english') {
    gameQuestions = generateEnglishQuestions();
  } else if (mode === 'shapes') {
    gameQuestions = generateShapesQuestions();
  } else if (mode === 'colors') {
    gameQuestions = generateColorsQuestions();
  } else if (mode === 'food') {
    gameQuestions = generateFoodQuestions();
  } else if (mode === 'size') {
    gameQuestions = generateSizeQuestions();
  } else if (mode === 'memory') {
    gameQuestions = [];
    memoryMatchedPairs = 0;
    firstCard = null;
    secondCard = null;
    canFlipMemoryCard = true;
  }

  // Update UI stats
  textScore.textContent = score;
  if (mode === 'memory') {
    textLevel.textContent = `0/${totalMemoryPairs} คู่`;
    document.getElementById('max-score').textContent = totalMemoryPairs;
  } else {
    textLevel.textContent = `1/${totalQuestions}`;
    document.getElementById('max-score').textContent = totalQuestions;
  }
  progressBar.style.width = '0%';

  navigateTo('game');
  loadQuestion();
}

// Load current question to UI
function loadQuestion() {
  // Handle memory game separately
  if (currentGameMode === 'memory') {
    btnRepeatVoice.classList.add('hidden');
    document.querySelector('.options-grid').classList.add('hidden');
    questionPrompt.textContent = 'จับคู่การ์ดสัตว์ที่เหมือนกันให้พบนะจ๊ะ! 🐻';
    questionDisplay.innerHTML = '';
    
    // Pick 6 random animal/fruit/item emojis
    const allPossibilities = [...emojis.animals, ...emojis.fruits, '🐔', '🦁', '🐸', '🐼', '🦊', '🦉'];
    const selected = shuffleArray(allPossibilities).slice(0, 6);
    const cardsList = shuffleArray([...selected, ...selected]);
    
    const grid = document.createElement('div');
    grid.className = 'memory-grid';
    
    cardsList.forEach((emoji, index) => {
      const card = document.createElement('div');
      card.className = 'memory-card';
      card.dataset.emoji = emoji;
      card.dataset.index = index;
      
      const front = document.createElement('div');
      front.className = 'memory-card-face memory-card-front';
      front.textContent = '❓';
      
      const back = document.createElement('div');
      back.className = 'memory-card-face memory-card-back';
      back.textContent = emoji;
      
      card.appendChild(front);
      card.appendChild(back);
      
      card.addEventListener('click', handleMemoryCardClick);
      grid.appendChild(card);
    });
    
    questionDisplay.appendChild(grid);
    
    const phrase = mascotPhrases.question[Math.floor(Math.random() * mascotPhrases.question.length)];
    mascotBubble.textContent = phrase;
    speakText('จับคู่การ์ดสัตว์ที่เหมือนกันให้พบนะจ๊ะ', 'th-TH');
    return;
  }

  // Restore normal gameplay elements
  btnRepeatVoice.classList.remove('hidden');
  document.querySelector('.options-grid').classList.remove('hidden');

  const q = gameQuestions[currentQuestionIndex];
  currentCorrectAnswer = q.correctAnswer;
  
  // Update header text
  textLevel.textContent = `${currentQuestionIndex + 1}/${totalQuestions}`;
  progressBar.style.width = `${(currentQuestionIndex / totalQuestions) * 100}%`;

  // Set prompt text
  questionPrompt.textContent = q.prompt;

  // Clear display and insert question content
  questionDisplay.innerHTML = '';
  if (q.type === 'count') {
    // Draw emojis count
    for (let i = 0; i < q.count; i++) {
      const emojiSpan = document.createElement('span');
      emojiSpan.className = 'question-item-emoji';
      emojiSpan.textContent = q.emoji;
      emojiSpan.style.animationDelay = `${i * 0.05}s`;
      questionDisplay.appendChild(emojiSpan);
    }
  } else if (q.type === 'shape') {
    // Draw SVG shape
    questionDisplay.innerHTML = q.display;
  } else if (q.type === 'color') {
    // Draw color block
    const colorCircle = document.createElement('div');
    colorCircle.style.width = '120px';
    colorCircle.style.height = '120px';
    colorCircle.style.borderRadius = '50%';
    colorCircle.style.backgroundColor = q.display.hex;
    colorCircle.style.border = q.display.hex === '#ffffff' ? '4px solid #ddd' : '4px solid #fff';
    colorCircle.style.boxShadow = '0 6px 15px rgba(0,0,0,0.1)';
    colorCircle.className = 'svg-shape';
    questionDisplay.appendChild(colorCircle);
  } else if (q.type === 'size') {
    // Draw two animals side-by-side with different sizes
    const sizeBox = document.createElement('div');
    sizeBox.style.display = 'flex';
    sizeBox.style.alignItems = 'center';
    sizeBox.style.gap = '40px';
    
    const leftAnimal = document.createElement('span');
    leftAnimal.textContent = q.display.a1.emoji;
    leftAnimal.style.fontSize = q.display.a1.size > q.display.a2.size ? '5.5rem' : '2.5rem';
    leftAnimal.style.transition = 'all 0.3s';
    
    const rightAnimal = document.createElement('span');
    rightAnimal.textContent = q.display.a2.emoji;
    rightAnimal.style.fontSize = q.display.a2.size > q.display.a1.size ? '5.5rem' : '2.5rem';
    rightAnimal.style.transition = 'all 0.3s';
    
    sizeBox.appendChild(leftAnimal);
    sizeBox.appendChild(rightAnimal);
    questionDisplay.appendChild(sizeBox);
  } else {
    // Text or Emoji display
    const contentDiv = document.createElement('div');
    contentDiv.style.display = 'flex';
    contentDiv.style.flexDirection = 'column';
    contentDiv.style.alignItems = 'center';
    
    const displaySpan = document.createElement('span');
    displaySpan.className = q.display.length > 2 ? 'question-item-emoji' : '';
    displaySpan.textContent = q.display;
    contentDiv.appendChild(displaySpan);

    if (q.displaySub) {
      const subSpan = document.createElement('span');
      subSpan.style.fontSize = '1.8rem';
      subSpan.style.color = '#777';
      subSpan.style.marginTop = '5px';
      subSpan.textContent = q.displaySub;
      contentDiv.appendChild(subSpan);
    }

    questionDisplay.appendChild(contentDiv);
  }

  // Fill option buttons
  optionButtons.forEach((btn, idx) => {
    // Clear styles
    btn.className = 'option-btn';
    btn.disabled = false;

    // Apply cute colors to options dynamically
    const colors = ['opt-pink', 'opt-green', 'opt-blue', 'opt-yellow'];
    btn.classList.add(colors[idx]);

    // Handle variable option length (e.g. Size Comparison only has 2 options!)
    const choice = q.choices[idx];
    if (!choice) {
      btn.style.display = 'none';
      return;
    } else {
      btn.style.display = 'flex';
    }

    btn.innerHTML = '';

    if (q.type === 'count') {
      btn.innerHTML = `<span class="option-btn-text">${choice}</span>`;
      btn.dataset.answer = choice;
    } else if (q.type === 'size') {
      btn.innerHTML = `<span class="option-btn-text">${choice.emoji}</span><span class="option-btn-sub">${choice.name}</span>`;
      btn.dataset.answer = choice.name;
    } else {
      const text = choice[q.displayKey];
      const subText = q.displayKeySub ? choice[q.displayKeySub] : '';
      
      let html = `<span class="option-btn-text">${text}</span>`;
      if (subText) {
        html += `<span class="option-btn-sub">${subText}</span>`;
      }
      btn.innerHTML = html;
      
      // Determine what the dataset answer key should match
      if (currentGameMode === 'colors') {
        btn.dataset.answer = choice.nameTh;
      } else if (currentGameMode === 'food') {
        btn.dataset.answer = choice.emojiFood;
      } else {
        btn.dataset.answer = choice[currentGameMode === 'thai' || currentGameMode === 'english' ? 'letter' : 'nameTh'];
      }
    }
  });

  // Mascot encourages
  const phrase = mascotPhrases.question[Math.floor(Math.random() * mascotPhrases.question.length)];
  mascotBubble.textContent = phrase;

  // Speak prompt
  const speakTextVal = q.speakPrompt || q.prompt;
  const speakLang = q.speakLang || 'th-TH';
  speakText(speakTextVal, speakLang);
}

// Memory Game Click Handler
function handleMemoryCardClick(e) {
  if (!canFlipMemoryCard) return;
  let card = e.target;
  while (card && !card.classList.contains('memory-card')) {
    card = card.parentElement;
  }
  if (!card || card.classList.contains('flipped') || card.classList.contains('matched')) return;
  
  playSoundEffect('click');
  card.classList.add('flipped');
  
  if (!firstCard) {
    firstCard = card;
  } else {
    secondCard = card;
    canFlipMemoryCard = false;
    
    const match = firstCard.dataset.emoji === secondCard.dataset.emoji;
    
    if (match) {
      setTimeout(() => {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        
        memoryMatchedPairs++;
        score = memoryMatchedPairs;
        textScore.textContent = memoryMatchedPairs;
        textLevel.textContent = `${memoryMatchedPairs}/${totalMemoryPairs} คู่`;
        progressBar.style.width = `${(memoryMatchedPairs / totalMemoryPairs) * 100}%`;
        
        playSoundEffect('correct');
        startConfetti();
        
        const cheer = mascotPhrases.correct[Math.floor(Math.random() * mascotPhrases.correct.length)];
        mascotBubble.textContent = cheer;
        speakText(`เจอแล้ว! ${firstCard.dataset.emoji}`, 'th-TH');
        
        firstCard = null;
        secondCard = null;
        canFlipMemoryCard = true;
        
        if (memoryMatchedPairs === totalMemoryPairs) {
          setTimeout(() => {
            endGame();
          }, 1500);
        }
      }, 500);
    } else {
      setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        
        playSoundEffect('incorrect');
        
        const oops = mascotPhrases.incorrect[Math.floor(Math.random() * mascotPhrases.incorrect.length)];
        mascotBubble.textContent = oops;
        speakText('อุ๊ย! ไม่เหมือนกันจ้า ลองเปิดอีกทีนะ', 'th-TH');
        
        firstCard = null;
        secondCard = null;
        canFlipMemoryCard = true;
      }, 1000);
    }
  }
}

// Check selected answer
function handleOptionSelect(e) {
  let btn = e.target;
  while (btn && !btn.classList.contains('option-btn')) {
    btn = btn.parentElement;
  }
  if (!btn || btn.disabled) return;

  optionButtons.forEach(b => b.disabled = true);

  const selectedAnswer = btn.dataset.answer;
  const q = gameQuestions[currentQuestionIndex];
  
  let isCorrect = false;
  let correctVal = '';
  
  if (currentGameMode === 'numbers') {
    isCorrect = parseInt(selectedAnswer) === q.correctAnswer;
    correctVal = q.correctAnswer.toString();
  } else if (currentGameMode === 'thai' || currentGameMode === 'english') {
    isCorrect = selectedAnswer === q.correctAnswer.letter;
    correctVal = q.correctAnswer.letter;
  } else if (currentGameMode === 'shapes') {
    isCorrect = selectedAnswer === q.correctAnswer.nameTh;
    correctVal = q.correctAnswer.nameTh;
  } else if (currentGameMode === 'colors') {
    isCorrect = selectedAnswer === q.correctAnswer.nameTh;
    correctVal = q.correctAnswer.nameTh;
  } else if (currentGameMode === 'food') {
    isCorrect = selectedAnswer === q.correctAnswer.emojiFood;
    correctVal = q.correctAnswer.emojiFood;
  } else if (currentGameMode === 'size') {
    isCorrect = selectedAnswer === q.correctAnswer.name;
    correctVal = q.correctAnswer.name;
  }

  const parentBox = document.querySelector('.question-box');

  if (isCorrect) {
    score++;
    textScore.textContent = score;
    playSoundEffect('correct');
    startConfetti();
    
    btn.style.transform = 'scale(1.1)';
    parentBox.classList.add('correct-flash');

    const cheer = mascotPhrases.correct[Math.floor(Math.random() * mascotPhrases.correct.length)];
    mascotBubble.textContent = cheer;

    const successSpeech = q.speechCorrect || `ถูกต้องแล้วจ้า เก่งมากๆ`;
    const speechLang = q.speakLang || 'th-TH';
    
    setTimeout(() => {
      speakText(successSpeech, speechLang);
    }, 400);

  } else {
    playSoundEffect('incorrect');
    parentBox.classList.add('incorrect-flash');

    const oops = mascotPhrases.incorrect[Math.floor(Math.random() * mascotPhrases.incorrect.length)];
    mascotBubble.textContent = oops;
    
    speakText(oops, 'th-TH');

    optionButtons.forEach(b => {
      if (b.dataset.answer === correctVal) {
        b.style.border = '4px solid #22c55e';
      }
    });
  }

  setTimeout(() => {
    parentBox.classList.remove('correct-flash');
    parentBox.classList.remove('incorrect-flash');
    btn.style.transform = '';
    optionButtons.forEach(b => b.style.border = '');

    currentQuestionIndex++;
    if (currentQuestionIndex < totalQuestions) {
      loadQuestion();
    } else {
      endGame();
    }
  }, 2200);
}

// End the game and show score
function endGame() {
  // Save High Score
  const hsKey = `highscore_${currentGameMode}`;
  const prevHS = parseInt(localStorage.getItem(hsKey)) || 0;
  if (score > prevHS) {
    localStorage.setItem(hsKey, score);
  }

  navigateTo('score');
  finalScoreText.textContent = score;
  
  const isMemory = currentGameMode === 'memory';
  const maxVal = isMemory ? totalMemoryPairs : totalQuestions;
  
  document.getElementById('max-score').textContent = maxVal;
  
  let endSpeech = '';
  if (isMemory) {
    endSpeech = `หนูจับคู่การ์ดสำเร็จครบ ${score} คู่เก่งมากๆ เลยครับ`;
  } else {
    endSpeech = `หนูได้คะแนน ${score} คะแนนจากทั้งหมด ${totalQuestions} คะแนน`;
    if (score === totalQuestions) {
      endSpeech += `, เก่งมากๆ เลยครับ ถูกต้องทุกข้อเลย!`;
    } else if (score >= 15) {
      endSpeech += `, ยอดเยี่ยมเลยจ้า เกือบเต็มแล้วนะ`;
    } else if (score >= 10) {
      endSpeech += `, เก่งมากเลยจ้า ได้ตั้งครึ่งทางแน่ะ`;
    } else {
      endSpeech += `, สนุกมากเลยจ้า มาพยายามใหม่ด้วยกันน้า`;
    }
  }
  
  setTimeout(() => {
    speakText(endSpeech, 'th-TH');
  }, 1000);
}

// Toggle audio mute
function toggleSound() {
  isSoundMuted = !isSoundMuted;
  if (isSoundMuted) {
    btnSound.textContent = '🔇';
    window.speechSynthesis.cancel();
  } else {
    btnSound.textContent = '🔊';
    // Replay last sound
    playSoundEffect('click');
    if (lastSpokenText) {
      speakText(lastSpokenText, lastSpokenLang);
    }
  }
}

// Event Listeners
btnStartGame.addEventListener('click', () => {
  playSoundEffect('click');
  navigateTo('menu');
});

// Voice Option Selectors
const btnVoiceFemale = document.getElementById('btn-voice-female');
const btnVoiceMale = document.getElementById('btn-voice-male');

if (btnVoiceFemale && btnVoiceMale) {
  btnVoiceFemale.addEventListener('click', () => {
    playSoundEffect('click');
    btnVoiceFemale.classList.add('active');
    btnVoiceMale.classList.remove('active');
    selectedVoiceGender = 'female';
    speakText('เสียงเด็กผู้หญิงค่ะ', 'th-TH');
  });

  btnVoiceMale.addEventListener('click', () => {
    playSoundEffect('click');
    btnVoiceMale.classList.add('active');
    btnVoiceFemale.classList.remove('active');
    selectedVoiceGender = 'male';
    speakText('เสียงผู้ชายครับ', 'th-TH');
  });
}

menuCards.forEach(card => {
  card.addEventListener('click', () => {
    playSoundEffect('click');
    const mode = card.dataset.gameMode;
    startGame(mode);
  });
});

optionButtons.forEach(btn => {
  btn.addEventListener('click', handleOptionSelect);
});

btnRepeatVoice.addEventListener('click', () => {
  playSoundEffect('click');
  const q = gameQuestions[currentQuestionIndex];
  if (q) {
    const speakTextVal = q.speakPrompt || q.prompt;
    const speakLang = q.speakLang || 'th-TH';
    speakText(speakTextVal, speakLang);
  }
});

mascotChar.addEventListener('click', () => {
  // Bouncy jump animation
  mascotChar.style.animation = 'none';
  // Trigger reflow
  mascotChar.offsetHeight;
  mascotChar.style.animation = 'mascotJump 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
  
  playSoundEffect('click');
  // Re-read bubble text
  speakText(mascotBubble.textContent, 'th-TH');
});

btnHome.addEventListener('click', () => {
  playSoundEffect('click');
  navigateTo('menu');
});

btnSound.addEventListener('click', toggleSound);

btnRestart.addEventListener('click', () => {
  playSoundEffect('click');
  startGame(currentGameMode);
});

btnGoHome.addEventListener('click', () => {
  playSoundEffect('click');
  navigateTo('menu');
});

// Setup confetti sizing adjustments on resize
window.addEventListener('resize', () => {
  if (currentScreen === 'game' || currentScreen === 'score') {
    resizeCanvas();
  }
});

// On Load
window.addEventListener('DOMContentLoaded', () => {
  navigateTo('welcome');
});
