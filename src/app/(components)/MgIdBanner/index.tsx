'use client'
export const MgidWidget = ({ id }: { id: string }) => {
  return (
    <div>
      <div data-type="_mgwidget" data-widget-id={id} />
      <script
        dangerouslySetInnerHTML={{
          __html:
            '(function(w,q){w[q]=w[q]||[];w[q].push(["_mgc.load"]);})(window,"_mgq");',
        }}
      />
    </div>
  );
};
