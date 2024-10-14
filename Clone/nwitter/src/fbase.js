// Firebase SDKs import
import { initializeApp } from "firebase/app"; // Firebase 초기화 모듈 가져오기
import { getAuth } from "firebase/auth"; // Firebase Authentication 모듈 가져오기

// Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

// Firebase 초기화 (이 파일 안에서만 실행)
const app = initializeApp(firebaseConfig);

// Firebase 서비스 (Authentication) 불러오기
export const authService = getAuth(app);

// 필요할 경우, app 자체도 export 가능
export default app;
