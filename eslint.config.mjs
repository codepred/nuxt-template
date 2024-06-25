import antfu from '@antfu/eslint-config'

export default antfu({
    rules: {
      indent: ['error', 2], 
    },
    overrides: [
      {
        files: ['*.vue'],
        rules: {
          'vue/html-indent': ['error', 4],
          'indent': 'off', 
        },
      },
    ],
})
