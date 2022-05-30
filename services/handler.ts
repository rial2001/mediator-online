export const hnd = res => {
  if(!res.data) throw new Error('response no data')
  if(res.data.Err) throw new Error(res.data.Err)
  return res.data.Ok
}
