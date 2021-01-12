import cv2
import sys
import base64
import numpy as np

inputs = sys.stdin.read()
binary_arry = base64.b64decode(inputs)
binary_np = np.frombuffer(binary_arry, dtype=np.uint8)

img_np = cv2.imdecode(binary_np, cv2.IMREAD_ANYCOLOR)

def mosaic(src, ratio=0.1):
    small = cv2.resize(src, None, fx=ratio, fy=ratio, interpolation=cv2.INTER_NEAREST)
    return cv2.resize(small, src.shape[:2][::-1], interpolation=cv2.INTER_NEAREST)

try:
    'path=os.path.join(mypath,n)'
    src = cv2.imread('C:/Users/BLUE/Documents/huWeb/model.jpg')
    dst_005 = mosaic(src, ratio=0.05)
    _, imen = cv2.imencode('.jpeg', dst_005)
    imenb = imen.tobytes()
    result = base64.b64encode(imenb).decode()
    print(result)

except Exception as e:
    print(str(e))