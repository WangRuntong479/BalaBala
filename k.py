from openai import OpenAI
client = OpenAI(
    api_key="sk-Nte5mMrLyGWbUvAOCFvUlgM05uHxM6Ups4axrRAGinEK6MBS",  # 将MOONSHOT_API_KEY替换为你的API Key
    base_url="https://api.moonshot.cn/v1",
)
completion = client.chat.completions.create(
    model="moonshot-v1-8k",  # 指定Kimi的模型名称
    messages=[
        {"role": "system", "content": "你是Kimi，由Moonshot AI提供的人工智能助手..."},
        {"role": "user", "content": "你好，我叫李雷，1+1等于多少？"}
    ],
    temperature=0.3,
)
print(completion.choices[0].message.content)
