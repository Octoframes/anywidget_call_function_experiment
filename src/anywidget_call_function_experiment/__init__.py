import importlib.metadata
import pathlib

import anywidget
import traitlets

try:
    __version__ = importlib.metadata.version("anywidget_call_function_experiment")
except importlib.metadata.PackageNotFoundError:
    __version__ = "unknown"


class Counter(anywidget.AnyWidget):
    _esm = pathlib.Path(__file__).parent / "static" / "widget.js"
    _css = pathlib.Path(__file__).parent / "static" / "widget.css"
    value = traitlets.Int(0).tag(sync=True)


class WidgetWithFunction(anywidget.AnyWidget):
    _esm = pathlib.Path(__file__).parent / "static" / "widget_function.js"
    # _css = pathlib.Path(__file__).parent / "static" / "widget_function.css"
    value = traitlets.Int(0).tag(sync=True)
