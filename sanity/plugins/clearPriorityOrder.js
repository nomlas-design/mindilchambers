import { useDocumentOperation } from 'sanity';

export function createClearPriorityOrderAction(originalAction) {
  const WrappedAction = (props) => {
    const defaultResult = originalAction(props);
    const { patch } = useDocumentOperation(props.id, props.type);

    if (!defaultResult) return null;

    return {
      ...defaultResult,
      onHandle: () => {
        // If priority is off but priorityOrder has a value, clear it before publishing
        if (!props.draft?.priority && props.draft?.priorityOrder != null) {
          patch.execute([{ unset: ['priorityOrder'] }]);
        }
        if (defaultResult.onHandle) {
          defaultResult.onHandle();
        }
      },
    };
  };

  return WrappedAction;
}
