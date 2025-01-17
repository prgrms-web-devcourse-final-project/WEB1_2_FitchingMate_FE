import PillButtonList from '@components/PillButtonList'
import { FollowBoxContainer, FollowButtonWrap, FollowPageWrap } from './style'
import FollowBox from './FollowBox'
import SubHeader from '@layouts/SubHeader'
import { useParams } from 'react-router-dom'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@apis/queryClient'
import followService from '@apis/followService'
import { useState } from 'react'

const FOLLOWER = '1'
const FOLLOWING = '2'

const FollowPage = () => {
  const { id } = useParams()
  const [currentFollowType, setCurrentFollowType] = useState(FOLLOWER)

  const {
    data: followingList,
    fetchNextPage: fetchFollowingNextPage,
    hasNextPage: hasFollowingNextPage,
    isFetchingNextPage: isFetchingFollowingNextPage,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEY.FOLLOWING_LIST, id],
    queryFn: async () => await followService.getFollowingList(Number(id)),
    initialPageParam: 0,
    getNextPageParam: (lastPage: any) => {
      return lastPage.hasNext ? lastPage.pageNumber + 1 : undefined
    },
  })

  const {
    data: followerList,
    fetchNextPage: fetchFollowerNextPage,
    hasNextPage: hasFollowerNextPage,
    isFetchingNextPage: isFetchingFollowerNextPage,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEY.FOLLOWER_LIST, id],
    queryFn: async () => await followService.getFollowerList(Number(id)),
    initialPageParam: 0,
    getNextPageParam: (lastPage: any) => {
      return lastPage.hasNext ? lastPage.pageNumber + 1 : undefined
    },
  })

  console.log(followerList)

  return (
    <>
      <SubHeader
        left='back'
        center='팔로잉 팔로우 목록'
      />
      <FollowPageWrap>
        <FollowButtonWrap>
          <PillButtonList
            buttons={[
              { id: '1', text: '팔로워', disabled: false },
              { id: '2', text: '팔로잉', disabled: false },
            ]}
            mode='radio'
            defaultSelected={FOLLOWER}
            onSelect={setCurrentFollowType}
          />
        </FollowButtonWrap>
        <FollowBoxContainer>
          {currentFollowType === '1'
            ? followerList?.pages[0].data.content &&
              followerList?.pages[0].data.content.map((data, index) => {
                return (
                  <FollowBox
                    data={data}
                    key={index}
                  />
                )
              })
            : followingList?.pages[0].data.content &&
              followingList?.pages[0].data.content.map((data, index) => {
                return (
                  <FollowBox
                    data={data}
                    key={index}
                  />
                )
              })}
        </FollowBoxContainer>
      </FollowPageWrap>
    </>
  )
}

export default FollowPage
