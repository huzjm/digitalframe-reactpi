import React, { useState, useRef, useEffect } from 'react';
import WidgetCard from './WidgetCard';
import { MessageCircle, Check, CheckCheck } from 'lucide-react';

interface ChatMessage {
  id: number;
  sender: 'Sarah' | 'Huzefa';
  text: string;
  time: string;
  seen: boolean;
}

const sampleMessages: ChatMessage[] = [
  { id: 1, sender: 'Sarah', text: 'Hey Huzefa, are you available for a call today?', time: '10:15 AM', seen: true },
  { id: 2, sender: 'Huzefa', text: 'Sure, Sarah! Let me know when.', time: '10:17 AM', seen: false },    
  { id: 3, sender: 'Sarah', text: 'How about 2 PM? I have an update on the dashboard integration.', time: '10:20 AM', seen: true },
  { id: 4, sender: 'Sarah', text: 'Hey Huzefa, are you available for a call today?', time: '10:15 AM', seen: true },
  { id: 5, sender: 'Huzefa', text: 'Sure, Sarah! Let me know when.', time: '10:17 AM', seen: true },
  { id: 6, sender: 'Sarah', text: 'How about 2 PM? I have an update on the dashboard integration.', time: '10:20 AM', seen: true },
  { id: 7, sender: 'Sarah', text: 'Hey Huzefa, are you available for a call today?', time: '10:15 AM', seen: true },
  { id: 8, sender: 'Huzefa', text: 'Sure, Sarah! Let me know when.', time: '10:17 AM', seen: true },
  { id: 9, sender: 'Sarah', text: 'How about 2 PM? I have an update on the dashboard integration.', time: '10:20 AM', seen: false },
  { id: 10, sender: 'Sarah', text: 'Hey Huzefa, are you available for a call today?', time: '10:15 AM', seen: true },
  { id: 12, sender: 'Huzefa', text: 'Sure, Sarah! Let me know when.', time: '10:17 AM', seen: false },    
  { id: 13, sender: 'Sarah', text: 'How about 2 PM? I have an update on the dashboard integration.', time: '10:20 AM', seen: true },
  { id: 14, sender: 'Sarah', text: 'Hey Huzefa, are you available for a call today?', time: '10:15 AM', seen: true },
  { id: 15, sender: 'Huzefa', text: 'Sure, Sarah! Let me know when.', time: '10:17 AM', seen: true },
  { id: 16, sender: 'Sarah', text: 'How about 2 PM? I have an update on the dashboard integration.', time: '10:20 AM', seen: true },
  { id: 17, sender: 'Sarah', text: 'Hey Huzefa, are you available for a call today?', time: '10:15 AM', seen: true },
  { id: 18, sender: 'Huzefa', text: 'Sure, Sarah! Let me know when.', time: '10:17 AM', seen: true },
  { id: 11, sender: 'Sarah', text: 'How about 2 PM? I have an update on the dashboard integration.', time: '10:20 AM', seen: false },
];

export default function Messaging() {
  const [messages, setMessages] = useState<ChatMessage[]>(sampleMessages);
  const [inputText, setInputText] = useState<string>('');
  const endRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    const newMsg: ChatMessage = {
      id: messages.length + 1,
      sender: 'Huzefa',
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      seen: false
    };
    setMessages([...messages, newMsg]);
    setInputText('');
  };

  return (
    <WidgetCard title="Messaging" icon={<MessageCircle className="w-6 h-6" />} blurLevel="md" height="h-full">
      <div className="flex flex-col h-full w-full">
      <div className="flex-1 overflow-y-auto p-2 space-y-3 min-h-0 max-h-[calc(50vh-200px)]">

          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex items-end ${msg.sender === 'Sarah' ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`relative max-w-[70%] px-4 py-2 rounded-lg text-white ${
                msg.sender === 'Sarah' ? 'bg-gray-700' : 'bg-blue-600'
              }`}>
                <div className="text-sm font-medium mb-1">{msg.sender}</div>
                <div className="text-base leading-snug">{msg.text}</div>
                <div className="mt-1 flex items-center justify-end text-xs opacity-75 space-x-1">
                  <span>{msg.time}</span>
                  {msg.sender === 'Huzefa' && (
                    msg.seen ? <CheckCheck className="w-4 h-4 text-green-400" /> : <Check className="w-4 h-4 text-gray-300" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2 flex items-center p-2 border-t border-white/20">
          <input
            type="text"
            className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 text-white placeholder-white/60 focus:outline-none"
            placeholder="Type a message..."
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
          />
          <button
            className="ml-2 p-2 bg-blue-500 rounded-full hover:bg-blue-400 transition"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </WidgetCard>
  );
}