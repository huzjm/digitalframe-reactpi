import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  collection,
  onSnapshot,
  addDoc,
  serverTimestamp,
  type QuerySnapshot,
  type DocumentData
} from 'firebase/firestore';
import { db } from '@/lib/firebase';

export interface ChatMessage {
  id: string;
  sender: 'Sarah' | 'Huzefa';
  text: string;
  time: { seconds: number; nanoseconds: number }; // raw Firestore timestamp
  seen: boolean;
}

interface MessageContextValue {
  messages: ChatMessage[];
  sendMessage: (text: string) => Promise<void>;
}

const MessageContext = createContext<MessageContextValue | undefined>(undefined);

export function MessageProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    const msgsCol = collection(db, 'messages');
    // real-time listener
    const unsubscribe = onSnapshot(
      msgsCol,
      (snap: QuerySnapshot<DocumentData>) => {
        const msgs: ChatMessage[] = snap.docs.map(doc => ({
          id: doc.id,
          ...(doc.data() as Omit<ChatMessage, 'id'>)
        }));
        setMessages(msgs);
      },
      err => console.error('Message subscription error:', err)
    );

    return () => unsubscribe();
  }, []);

  const sendMessage = async (text: string) => {
    await addDoc(collection(db, 'messages'), {
      sender: 'Huzefa',
      text,
      time: serverTimestamp(),
      seen: false,
    });
  };

  return (
    <MessageContext.Provider value={{ messages, sendMessage }}>
      {children}
    </MessageContext.Provider>
  );
}

export function useMessages() {
  const ctx = useContext(MessageContext);
  if (!ctx) throw new Error('useMessages must be inside MessageProvider');
  return ctx;
}
