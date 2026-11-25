import type { Register, ThemeSetArgs } from 'claude-code'

// 대화 글꼴: 명조(serif), 기본보다 조금 굵게
const LOOK: ThemeSetArgs = {
  style: {
    Text: { fontFamily: ['serif'], fontWeight: 'semibold' },
    Heading: { fontFamily: ['serif'], fontWeight: 'bold' },
    ToolUse: { fontFamily: ['serif'] },
  },
}

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    try {
      const set = await $.theme.set(LOOK)

      if (!set.isDrawn) {
        $.ui.status(set.reason)
      }
    } catch (error) {
      $.ui.log(String(error))
    }

    return next(e)
  })
}
