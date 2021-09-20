import { shallowMount } from '@vue/test-utils'
import GameContainer from '../src/components/GameContainer.vue';

describe('GameContainer.vue', () => {
    it('renders a the game container', () => {
        const msg = 'new message'
        const wrapper = shallowMount(GameContainer)
        console.log(wrapper.html())
        expect(wrapper.text()).toMatch(msg)
    })
  })