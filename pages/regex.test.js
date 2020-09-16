import { shallowMount } from '@vue/test-utils'
import Regex from '@/pages/regex'

let mockAxiosGetResult = { problems: [], total_rows: 1 }
jest.mock('axios', () => ({
  $get: jest.fn(() => Promise.resolve(mockAxiosGetResult)),
}))

const checkAdmin = jest.fn();
checkAdmin.mockReturnValue(true);

it('fetches async when a button is clicked', () => {
  const wrapper = shallowMount(Regex, { methods: { checkAdmin } })
  wrapper.vm.fetchProblems(1)
  expect(wrapper.vm.problems).toStrictEqual([])
})