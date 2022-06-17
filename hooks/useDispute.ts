import { useSelector } from 'react-redux'

const useDispute = () => {
  const dispute = useSelector<any, any>(state => state.dispute.dispute)
  const disputes = useSelector<any, any>(state => state.disputes.disputes)
  return {dispute, disputes}
}

export default useDispute
