import { useEffect, useRef } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'

interface KakaoMapProps {
  searchLocation: {
    y: number
    x: number
  }
}

const KakaoMap = ({ searchLocation }: KakaoMapProps) => {
  const { y, x } = searchLocation

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
  }, [mapRef])

  const kakaoMapOptions = {
    center: { lat: y, lng: x },
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
      <Map
        ref={mapRef}
        {...kakaoMapOptions}
      >
        <MapMarker position={{ lat: y, lng: x }} />
      </Map>
    </>
  )
}

export default KakaoMap
