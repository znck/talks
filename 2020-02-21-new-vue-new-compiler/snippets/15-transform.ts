type DirectiveTransform = (
  node: Node,
  context: TransformContext
) => void | (() => void)

type DirectiveTransform = (
  dir: DirectiveNode,
  node: ElementNode,
  context: TransformContext
) => DirectiveTransformResult

interface DirectiveTransformResult {
  props: Property[]
  needRuntime: boolean
}
