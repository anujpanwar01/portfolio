import { initializeApp } from "firebase/app";
// import {} from
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDj_HwsdKeQFThVR9tDiNSVGfNcy4K1nfU",
  authDomain: "portfolio-f4722.firebaseapp.com",
  databaseURL: "https://portfolio-f4722-default-rtdb.firebaseio.com",
  projectId: "portfolio-f4722",
  storageBucket: "portfolio-f4722.appspot.com",
  messagingSenderId: "218797683657",
  appId: "1:218797683657:web:11298b5ddad5969ad36e18",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const fileStore = getStorage();

// export const fileStoreRef = ref(fileStore, "files.");
// export const cvStoreRef = ref(fileStore, "cv");

// const sendData = async () => {
//   await uploadBytes();
// console.log(cvStoreRef, fileStoreRef);
// };
// uploadBytes(cvStoreRef, file).then((snapshot) => {
// console.log("Uploaded a blob or file!", snapshot);
// });
