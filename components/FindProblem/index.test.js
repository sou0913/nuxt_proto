import { shallowMount } from '@vue/test-utils'
import FindProblem from '@/components/FindProblem'

describe('FindProblem', () => {
  // const props = {
  //     target: 'abc',
  //     statement: 'abcdef',
  // }
  // it('target(マッチ対象)が表示されているか確認', () => {
  //   const wrapper = shallowMount(FindProblem, { propsData: { ...props } })
  //   expect(wrapper.text()).toBe(props.target)
  // })
  // it ('statement(全体文)が表示されているか確認', () => {
  //   const wrapper = shallowMount(FindProblem, { propsData: { ...props } })
  //   expect(wrapper.text()).toBe(props.statement)
  // })
  it ('「一覧へ戻る」のテキスト表示がある', () => {
    const wrapper = shallowMount(FindProblem)
    expect(wrapper.text()).toMatch(/一覧へ戻る/)
  })
})
