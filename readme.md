# FSM Grid

Simple grid component shared in a public npm package for Angular (4 and beyond).

# How to use?

```
$ npm i <repository_url> --save
```

# API

## Outputs

## Inputs | Accepted values
```
headerClass: string | ['default', 'success', 'failure']
```
# Integration

Should work out of the box with webpack, respectively angular-cli. All you need to do is to include `FsmGridModule`:

```ts
import { FsmGridModule } from 'fsm-grid/dist';

@NgModule({
  imports: [FsmGridModule],
  ...
})
class AppModule {}
```

...and then use in your markup:

```html
<div>
...
<fsm-grid headerClass="success"></fsm-grid>
...
</div>
```

# License

MIT
