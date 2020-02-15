import { WalmartItemApi } from 'ern-movie-list-demo-api'

WalmartItemApi.requests().registerFindItemsRequestHandler((requestData) => {
  console.log('hello registerFindItemsRequestHandler')
  console.log('requestData', requestData)
  return Promise.resolve('yay')
})
WalmartItemApi.requests().registerAddItemRequestHandler((requestData) => {
  //TODO: Write your implementation and resolve or reject the promise
  //return Promise.resolve(result) || Promise.reject(err)
})
