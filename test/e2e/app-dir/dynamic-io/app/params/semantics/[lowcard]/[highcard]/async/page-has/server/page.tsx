import { getSentinelValue } from '../../../../../../../getSentinelValue'

export default async function Page({
  params,
}: {
  params: Promise<{ lowcard: string; highcard: string }>
}) {
  return (
    <section>
      <p>
        This Page does key checking of the params prop in a server component
      </p>
      <div>
        page lowcard:{' '}
        <span id="param-has-lowcard">
          {'' + Reflect.has(await params, 'lowcard')}
        </span>
      </div>
      <div>
        page highcard:{' '}
        <span id="param-has-highcard">
          {'' + Reflect.has(await params, 'highcard')}
        </span>
      </div>
      <div>
        page foo:{' '}
        <span id="param-has-foo">{'' + Reflect.has(await params, 'foo')}</span>
      </div>
      <span id="page">{getSentinelValue()}</span>
    </section>
  )
}