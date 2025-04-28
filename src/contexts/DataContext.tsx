// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { ref, onValue, DataSnapshot } from 'firebase/database';
// import { db } from '@/lib/firebase';

// interface ChatMessage { id: number; sender: string; text: string; time: string; seen: boolean }
// // interface Photo { id: string; url: string; caption?: string }
// // type MiscEvent = Record<string, any>;

// interface DataContextValue {
//   messages: ChatMessage[];
// //   photos: Photo[];
// //   misc: MiscEvent | null;
// }

// const DataContext = createContext<DataContextValue | undefined>(undefined);

// export function DataProvider({ children }: { children: React.ReactNode }) {
//   const [messages, setMessages] = useState<ChatMessage[]>([]);
// //   const [photos, setPhotos]       = useState<Photo[]>([]);
// //   const [misc, setMisc]           = useState<MiscEvent | null>(null);

//   useEffect(() => {
//     const msgsRef = ref(db, 'messages');
//     // const photosRef = ref(db, 'photos');
//     // const miscRef = ref(db, 'miscellaneous');

//     const unsubMsgs = onValue(msgsRef, snapshot => {
//       const data = snapshot.val() || {};
//       // Assuming your data is an object keyed by some id
//       setMessages(Object.values(data));
//     });

//     // const unsubPhotos = onValue(photosRef, snapshot => {
//     //   const data = snapshot.val() || {};
//     //   setPhotos(Object.values(data));
//     // });

//     // const unsubMisc = onValue(miscRef, snapshot => {
//     //   setMisc(snapshot.val());
//     // });

//     return () => {
//       unsubMsgs();
//     //   unsubPhotos();
//     //   unsubMisc();
//     };
//   }, []);

// //   return (
// //     <DataContext.Provider value={{ messages, photos, misc }}>
// //       {children}
// //     </DataContext.Provider>
// //   );
//   return (
//     <DataContext.Provider value={{ messages }}>
//       {children}
//     </DataContext.Provider>
//   );
// }

// export function useData() {
//   const ctx = useContext(DataContext);
//   if (!ctx) throw new Error("useData must be inside DataProvider");
//   return ctx;
// }
