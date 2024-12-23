import requests
import json

# 你的Moonshot API Key
api_key = 'sk-Nte5mMrLyGWbUvAOCFvUlgM05uHxM6Ups4axrRAGinEK6MBS'

# 设置请求头
headers = {
    'Authorization': f'Bearer {api_key}',
    'Content-Type': 'application/json'
}

# API请求地址
url = 'https://api.moonshot.cn/v1/chat/completions'

# 构造请求体，这里以单轮对话为例
data = {
    "model": "moonshot-v1-8k",  # 指定模型，根据实际情况可能需要更改
    "messages": [
        {"role": "user", "content": "把这段话换个说法告诉我,直接给我翻译结果，不要其他：今天天气不错，挺风和日丽的，我来学学ai，这其实很简单的！"}
    ],
    "temperature": 0.5  # 温度参数，控制回答的随机性
}

# 发送POST请求
response = requests.post(url, headers=headers, data=json.dumps(data))

# 检查响应状态码
if response.status_code == 200:
    # 解析响应内容
    response_data = response.json()
    print('Kimi的回答：', response_data['choices'][0]['message']['content'])
else:
    print('请求失败，状态码：', response.status_code)
