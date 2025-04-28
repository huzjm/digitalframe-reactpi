import React, { useState, useRef, useEffect } from 'react';
import WidgetCard from './WidgetCard';
import { MessageCircle, Check, CheckCheck } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useMessages, type ChatMessage } from '@/contexts/MessageContext';
import type { Timestamp } from 'firebase/firestore';

export default function Messaging() {
  const { messages, sendMessage } = useMessages();
  const [inputText, setInputText] = useState<string>('');
  const endRef = useRef<HTMLDivElement>(null);

  // scroll to bottom whenever messages change
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    const text = inputText.trim();
    if (!text) return;
    sendMessage(text).catch(console.error);
    setInputText('');
  };

  // helper to format Firestore Timestamp
  const formatTime = (ts: Timestamp | undefined) => {
    if (!ts || typeof ts.toDate !== 'function') return '';
    return ts.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <WidgetCard title="Messaging" icon={<MessageCircle className="w-6 h-6" />} blurLevel="md" height="h-full">
      <div className="flex flex-col h-full w-full">
        <ScrollArea className="flex-1 max-h-[calc(50vh-200px)]">
          <div className="p-2 space-y-3">
            {messages.map((msg: ChatMessage) => (
              <div
                key={msg.id}
                className={`flex items-end ${msg.sender === 'Sarah' ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`relative max-w-[70%] px-4 py-2 rounded-lg text-white ${
                    msg.sender === 'Sarah' ? 'bg-gray-700' : 'bg-blue-600'
                  }`}
                >
                  <div className="text-sm font-medium mb-1">{msg.sender}</div>
                  <div className="text-base leading-snug">{msg.text}</div>
                  <div className="mt-1 flex items-center justify-end text-xs opacity-75 space-x-1">
                    <span>{formatTime((msg.time as any) as Timestamp)}</span>
                    {msg.sender === 'Huzefa' &&
                      (msg.seen ? (
                        <CheckCheck className="w-4 h-4 text-green-400" />
                      ) : (
                        <Check className="w-4 h-4 text-gray-300" />
                      ))}
                  </div>
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>
        </ScrollArea>

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
