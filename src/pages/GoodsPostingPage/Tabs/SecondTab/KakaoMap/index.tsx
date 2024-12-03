import { useEffect, useRef } from 'react'
import { MapMarker } from 'react-kakao-maps-sdk'
import { KakaoMapContainer } from './style'

interface KakaoMapProps {
  location: {
    placeName: string
    latitude: string | null
    longitude: string | null
  }
}

const KakaoMap = ({ location }: KakaoMapProps) => {
  const mapRef = useRef<kakao.maps.Map>(null)

  useEffect(() => {
    // 뷰포트 리사이즈 시, 카카오맵 중심 좌표 유지
    const reSizeHandler = () => {
      if (mapRef.current) {
        const currentPoint = mapRef.current.getCenter()

        mapRef.current.relayout()
        mapRef.current.setCenter(currentPoint)
      }
    }

    window.addEventListener('resize', reSizeHandler)

    return () => {
      window.removeEventListener('resize', reSizeHandler)
    }
  }, [])

  const { latitude, longitude } = location

  const kakaoMapOptions = {
    center: { lat: Number(latitude), lng: Number(longitude) },
    style: {
      width: '100%',
      height: '100%',
    },
    level: 1,
    zoomable: false,
    draggable: false,
  }

  return (
    <>
      <KakaoMapContainer
        ref={mapRef}
        {...kakaoMapOptions}
      >
        <MapMarker position={kakaoMapOptions.center} />
      </KakaoMapContainer>
    </>
  )
}

export default KakaoMap
