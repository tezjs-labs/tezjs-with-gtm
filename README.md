#  Gtm  with tezjs

- Create **tezjs** fresh project 

- Add one file in the root directory with name **add-lib.ts**
  
  ```
    project's root directory/add-lib.ts
  ```

- import  addlib,tagManager, addStyleSheet from @tezjs/js
```
import { addLib,tagManager,addStylesheet } from "@tezjs/js"

```

- export one default function addLib with required options

```
  export default addLib({
    afterUserInteraction:[tagManager("Your_GTM_CODE")]
  })
```
- In above code afterUserInteraction tagManger will configure your tagId.
