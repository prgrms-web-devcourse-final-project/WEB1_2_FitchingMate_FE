import React from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'

const KakaoMapContainer = ({
  latitude,
  longitude,
}: {
  latitude: string
  longitude: string
}) => {
  const handleMapClick = () => {
    const kakaoMapUrl = `https://map.kakao.com/?q=${latitude},${longitude}`
    window.open(kakaoMapUrl, '_blank')
  }

  return (
    <Map
      center={{
        lat: Number(latitude),
        lng: Number(longitude),
      }}
      style={{ width: '100%', height: '115px' }}
      draggable={false}
      onClick={handleMapClick}
    >
      <MapMarker
        position={{
          lat: Number(latitude),
          lng: Number(longitude),
        }}
        onClick={handleMapClick}
      />
    </Map>
  )
}

export default KakaoMapContainer
