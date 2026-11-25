# serif-font

Claude 데스크톱·모바일 앱의 대화 글꼴을 명조(serif) 계열로 바꾸고, 기본보다 조금 굵게(semibold) 보여 주는 모드입니다. 제목은 굵게(bold), 도구 실행 줄도 명조로 표시됩니다. 터미널 화면에는 적용되지 않습니다.

## 설치

터미널에서 Claude Code를 연 뒤 프롬프트에 입력합니다:

```
/plugin install serif-font --marketplace lysdodo4048-dotcom/claude-serif-font
```

`Add marketplace?`에 `y`를 누르고, 범위는 user를 고르면 이후 모든 세션에 적용됩니다.

셸에서 설치할 때:

```bash
claude plugin install serif-font --marketplace lysdodo4048-dotcom/claude-serif-font
```

데스크톱 앱에서 `/plugin`이 동작하지 않을 때: 입력창 옆 **+** → **Plugins** → **Add marketplace**에 `lysdodo4048-dotcom/claude-serif-font` 입력 → **Add plugin**.

## 크롬 웹(claude.ai)에서 쓰기

1. 크롬에 [Stylus](https://chromewebstore.google.com/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne) 확장 프로그램을 설치합니다.
2. 아래 주소를 엽니다. Stylus가 설치 화면을 띄우면 **설치**를 누릅니다.
   https://raw.githubusercontent.com/lysdodo4048-dotcom/claude-serif-font/main/claude-serif.user.css
3. claude.ai를 새로고침합니다.
