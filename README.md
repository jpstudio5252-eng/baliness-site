# BALINESS SPA — 홈페이지 (미리보기)

발리너스 스파의 브랜드 홈페이지입니다. **정식 도메인 이전 전 확인용 미리보기**로 GitHub Pages에 올라가 있습니다.

- 미리보기: https://jpstudio5252-eng.github.io/baliness-site/
- 본점(용산): `/yongsan/` · 이태원·한남점: `/hannam/`
- English: `/en/` · `/en/yongsan/` · `/en/hannam/`

## 이 사이트에 대해

- 정적 HTML/CSS만 사용합니다. 외부 스크립트·폰트·추적 도구가 없습니다.
- AI 검색(GEO) 대응: 지점별 `HealthAndBeautyBusiness`/`LocalBusiness` JSON-LD, `Organization`·`WebSite`·`WebPage`·`BreadcrumbList`·`Service`·`FAQPage`, `robots.txt`의 AI 크롤러 허용, `sitemap.xml`(hreflang 포함), `llms.txt`.
- 확인되지 않은 정보(본점 호수·영업시간, 한남점 주소·전화·영업시간·가격 등)는 화면에 **'준비 중'** 으로 표시되어 있으며, 추측으로 채우지 않습니다.
- 프로그램은 운동·미용 관리이며 의료 행위가 아닙니다. 고주파 관리는 미용기기 허가 제품으로 진행합니다.

## 수정 방법

브랜드명, 지점 주소·전화·영업시간, 오픈일은 단일 설정 파일(`site.config.json`)에서 관리하고 빌드 스크립트로 다시 생성합니다. 저장소에는 빌드 결과물만 올라가므로, 내용을 고칠 때는 원본 소스(설정 파일 + 빌드 스크립트)를 수정한 뒤 다시 게시합니다.

## 게시 구조

- `main` 브랜치와 `gh-pages` 브랜치가 같은 내용을 담고 있으며, **GitHub Pages는 `gh-pages` 브랜치를 소스로 사용**합니다. 내용을 고칠 때는 두 브랜치 모두 갱신해야 실제 사이트에 반영됩니다.
