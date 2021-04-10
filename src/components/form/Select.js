import tw from 'twin.macro'
import { useSelectState } from '@react-stately/select'
import { Item } from '@react-stately/collections'
import { HiddenSelect } from '@react-aria/select'
import { useListBox, useOption } from '@react-aria/listbox'
import { mergeProps } from '@react-aria/utils'
import { useButton } from '@react-aria/button'
import { useFocus } from '@react-aria/interactions'
import { FocusScope } from '@react-aria/focus'
import { useOverlay, DismissButton } from '@react-aria/overlays'
import { forwardRef } from 'react'

export const Select = forwardRef((props, ref) => {
  // Create state based on the incoming props
  let state = useSelectState(props)

  // Get props for child elements from useSelect
  let { labelProps, triggerProps, valueProps, menuProps } = useSelect(
    props,
    state,
    ref,
  )

  // Get props for the button based on the trigger props from useSelect
  let { buttonProps } = useButton(triggerProps, ref)

  return (
    <div tw='inline-block relative'>
      <div {...labelProps}>{props.label}</div>
      <HiddenSelect
        state={state}
        triggerRef={ref}
        label={props.label}
        name={props.name}
      />
      <button {...buttonProps} ref={ref}>
        <span {...valueProps}>
          {state.selectedItem
            ? state.selectedItem.rendered
            : 'Select an option'}
        </span>
        <span aria-hidden='true' tw='pl-1'>
          &or;
        </span>
      </button>
      {state.isOpen && <ListBoxPopup {...menuProps} state={state} />}
    </div>
  )
})

const ListBoxPopup = forwardRef(({ state, ...otherProps }, ref) => {
  // Get props for the listbox
  let { listBoxProps } = useListBox(
    {
      autoFocus: state.focusStrategy || true,
      disallowEmptySelection: true,
      ...otherProps,
    },
    state,
    ref,
  )

  // Handle events that should cause the popup to close,
  // e.g. blur, clicking outside, or pressing the escape key.
  let overlayRef = React.useRef()
  let { overlayProps } = useOverlay(
    {
      onClose: () => state.close(),
      shouldCloseOnBlur: true,
      isOpen: state.isOpen,
      isDismissable: true,
    },
    overlayRef,
  )

  // Wrap in <FocusScope> so that focus is restored back to the
  // trigger when the popup is closed. In addition, add hidden
  // <DismissButton> components at the start and end of the list
  // to allow screen reader users to dismiss the popup easily.
  return (
    <FocusScope restoreFocus>
      <div {...overlayProps} ref={overlayRef}>
        <DismissButton onDismiss={() => state.close()} />
        <ul
          {...mergeProps(listBoxProps, otherProps)}
          ref={ref}
          tw='absolute w-full m-0 mt-1 p-0 list-none border-gray-400 border-solid bg-white'
        >
          {[...state.collection].map(item => (
            <Option key={item.key} item={item} state={state} />
          ))}
        </ul>
        <DismissButton onDismiss={() => state.close()} />
      </div>
    </FocusScope>
  )
})

const Option = forwardRef(({ item, state }, ref) => {
  let isDisabled = state.disabledKeys.has(item.key)
  let isSelected = state.selectionManager.isSelected(item.key)
  let { optionProps } = useOption(
    {
      key: item.key,
      isDisabled,
      isSelected,
      shouldSelectOnPressUp: true,
      shouldFocusOnHover: true,
    },
    state,
    ref,
  )

  // Handle focus events so we can apply highlighted
  // style to the focused option
  let [isFocused, setFocused] = React.useState(false)
  let { focusProps } = useFocus({ onFocusChange: setFocused })

  return (
    <li
      {...mergeProps(optionProps, focusProps)}
      ref={ref}
      tw={
        'px-1 py-2 outline-none cursor-pointer ' +
        (isSelected ? 'bg-primary color-white' : '')
      }
    >
      {item.rendered}
    </li>
  )
})
