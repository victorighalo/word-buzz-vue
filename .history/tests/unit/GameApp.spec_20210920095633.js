import { shallowMount } from '@vue/test-utils'
import GameContainer from '@/components/GameContainer.vue';

describe('GameContainer.vue', () => {
    it('renders a the game container', () => {
        const msg = 'Word Buzz GamePlayer'
        const wrapper = shallowMount(GameContainer)
        expect(wrapper.text()).toMatch(/Word Buzz GamePlayer/)
    })
  })