import { createLocalVue, shallowMount } from '@vue/test-utils'
import sinon from 'sinon'
import Vue from 'vue'
import card from '~/components/card'

const EventBus = new Vue()

const GlobalPlugins = {
  install(v) {
    // Event bus
    v.prototype.$bus = EventBus
  }
}

// create a local instance of the global bus
const localVue = createLocalVue()
localVue.use(GlobalPlugins)

describe('card', () => {
  it('emits an event', () => {
    const wrapper = shallowMount({ sync: false })
    wrapper.vm.$emit('favChange')
    wrapper.setData(card, {
      propsData: {
        fav: false,
        video: {
          id: {
            videoId: 'sdfh24563sfgd'
          },
          fav: true,
          snippet: {
            title: 'Sample',
            description: 'Some text about the video'
          }
        }
      }
    })

    expect(wrapper.emitted('favChange')).toBeTruthy()
  })

  it('data property "active" should change on mouseover and mouseout', () => {
    const spy = sinon.spy()
    const wrapper = shallowMount(card, {
      localVue,
      propsData: {
        active: spy,
        video: {
          id: {
            videoId: 'sdfh24563sfgd'
          },
          fav: true,
          snippet: {
            title: 'Sample',
            description: 'Some text about the video'
          }
        }
      }
    })
    wrapper.find('v-card.vidCard').trigger('mouseOver')
    expect(spy.calledWith('mouseOver'))
    wrapper.find('v-card.vidCard').trigger('mouseOut')
    expect(spy.calledWith('mouseOut'))
    sinon.restore()
  })
})
