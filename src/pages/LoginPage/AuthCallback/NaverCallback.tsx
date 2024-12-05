import { useEffect } from 'react';
import fetchApi from '@apis/ky';

const NaverCallback = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        // URL에서 쿼리 파라미터 추출
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        const state = urlParams.get('state');

        if (code && state) {
          // 네이버 로그인 데이터 확인용 요청
          const data = await fetchApi
            .get(`auth/login/naver`, {
              searchParams: { code, state },
            })
            .json();

          console.log('네이버 로그인 응답:', data);
        } else {
          console.error('code 또는 state가 누락되었습니다.');
        }
      } catch (error) {
        console.error('네이버 로그인 처리 중 오류가 발생했습니다.', error);
      }
    };

    fetchData();
  }, []);

  return <div>네이버 로그인 처리 중...</div>;
};

export default NaverCallback;
