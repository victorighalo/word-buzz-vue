import { shallowMount } from '@vue/test-utils';
import GameContainer from '@/components/GameContainer.vue';

describe('GameContainer.vue', () => {
    it('renders the game container', () => {
        const wrapper = shallowMount(GameContainer)
        expect(wrapper.text()).toMatch(/Word Buzz GamePlayer/)
    })

    it('it starts the game', async () => {
        const wrapper = shallowMount(GameContainer);
        await wrapper.find("[data-playerOne]").setValue("Victor")
        await wrapper.find("[data-playerTwo]").setValue("Omotola")
        await wrapper.find("button#startGame").trigger("click")
        console.log(wrapper.text())
        expect(wrapper.text()).toMatch('Hey! Victor, Enter your secret word')
    })
  })