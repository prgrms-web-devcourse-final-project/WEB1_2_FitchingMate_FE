import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const RedirectHandler = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const code = searchParams.get("code");
    const state = searchParams.get("state");

    if (code && state) {
      console.log("Code:", code);
      console.log("State:", state);

      // 백엔드로 전달
      sendCodeToBackend(code, state);
    } else {
      console.error("Code 또는 State가 없습니다.");
    }
  }, [searchParams]);

  return <div>로그인 처리 중...</div>;
};

const sendCodeToBackend = async (code: string, state: string) => {
  try {
    const response = await fetch("/api/auth/naver", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, state }),
    });
    const data = await response.json();
    console.log("Backend Response:", data);
  } catch (error) {
    console.error("Error sending code to backend:", error);
  }
};

export default RedirectHandler;
