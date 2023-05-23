import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SocialMedia from '../SocialMedia.vue'

describe('SocialMedia', () => {
  it('renders href of links properly', () => {
    const wrapper = mount(SocialMedia)
    const firstLink = wrapper.find('a:first-of-type')
    const secondLink = wrapper.find('a:nth-of-type(2)')
    const thirdLink = wrapper.find('a:last-of-type')
    expect(firstLink.attributes().href).toBe('https://www.linkedin.com/in/mayakrey/')
    expect(secondLink.attributes().href).toBe('https://github.com/mayakrey')
    expect(thirdLink.attributes().href).toBe('mailto:maya.krey@gmail.com')
  })
})
