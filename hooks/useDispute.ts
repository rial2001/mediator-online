import { useSelector } from 'react-redux'

const useDispute = () => {
  const dispute = useSelector(state => state.dispute.dispute)
  const disputes = useSelector(state => state.disputes.disputes)
  return {dispute, disputes}
}

export default useDispute
