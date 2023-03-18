import type { JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  transform: {
    "^.+.spec.ts": ["ts-jest", {
      tsconfig: {
        resolveJsonModule: true,
        esModuleInterop: true
      }
    }]
  }
}

export default jestConfig;