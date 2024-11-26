import { Map, MapMarker } from 'react-kakao-maps-sdk'

interface KakaoMapProps {
  searchLocation: {
    y: number
    x: number
  }
}

const KakaoMap = ({ searchLocation }: KakaoMapProps) => {
  const { y, x } = searchLocation

  const kakaoMapOptions = {
    center: { lat: y, lng: x },
    style: {
      width: '100%',
      height: '100%',
    },
    level: 1,
  }

  return (
    <Map {...kakaoMapOptions}>
      <MapMarker position={{ lat: y, lng: x }} />
    </Map>
  )
}

export default KakaoMap
