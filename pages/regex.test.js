import { shallowMount } from '@vue/test-utils'
import Regex from '@/pages/regex'

let mockAxiosGetResult = { problems: [], total_rows: 1 }
jest.mock('axios', () => ({
  $get: jest.fn(() => Promise.resolve(mockAxiosGetResult)),
}))

it('fetches async when a button is clicked', () => {
  const wrapper = shallowMount(Regex)
  wrapper.vm.fetchProblems(1)
  expect(wrapper.vm.problems).toStrictEqual([])
})