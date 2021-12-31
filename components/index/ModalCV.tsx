import { Button, Modal } from "antd"
import { forwardRef, useImperativeHandle, useState } from "react"
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

interface Props {

}

const ModalCV = ({}: Props, ref: any) => {

    const [isVisible, setIsVisible] = useState<boolean>(false)

    const open = () => {
        setIsVisible(true)
    }

    const close = () => {
        setIsVisible(false)
    }

    useImperativeHandle(ref, () => ({
        open
    }))

    const docs = [
        { uri: "/docs/cv.pdf" }
    ];

    return (
        <Modal width={800} centered visible={isVisible} onCancel={close} title="Mi CV" footer={[<Button type="primary" key="btn-close" onClick={close}>Cerrar</Button>]}>
            <DocViewer
                style={{height: "70vh"}}
                pluginRenderers={DocViewerRenderers}
                documents={docs} />
        </Modal>
    )
}

export default forwardRef(ModalCV)