import { useMateFormStore } from '@store/useMateFormStore'

type CategoryKey = 'age' | 'maxParticipants' | 'gender' | 'transportType'

const useCategoryState = (selector: CategoryKey) => {
  const store = useMateFormStore()

  const setters = {
    age: store.setAge,
    maxParticipants: store.setMaxParticipants,
    gender: store.setGender,
    transportType: store.setTransportation,
  }

  return {
    setter: setters[selector],
    getter: store.matePost[selector as keyof typeof store.matePost],
  }
}

export default useCategoryState
