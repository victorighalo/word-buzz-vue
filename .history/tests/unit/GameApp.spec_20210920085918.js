import { mount } from '@vue/test-utils';
import GameContainer from '../../components/GameContainer.vue';

describe('GameContainer.vue', () => {
    it('renders a the game container', () => {
        const wrapper = mount(GameContainer)
        console.log(wrapper.html())
    })
  })