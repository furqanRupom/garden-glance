
import { baseApi } from "../../api/baseAPI";



const flowersApi  = baseApi.injectEndpoints({
  endpoints:(builder) => ({
    addFlower:builder.mutation({
      query:(data) => ({
        url:'/flowers/add-flower',
        method:'POST',
        body:data
      })
    })
  })
})


export const {useAddFlowerMutation} = flowersApi