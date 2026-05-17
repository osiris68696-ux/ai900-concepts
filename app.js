const concepts = [
  {
    category: "AI 與機器學習生命週期",
    name: "標記",
    english: "Labeling / Labels",
    description: "幫訓練資料貼上標準答案的動作。有標記資料用於監督式學習，沒標記資料常用於非監督式學習。"
  },
  {
    category: "AI 與機器學習生命週期",
    name: "特徵",
    english: "Features",
    description: "輸入給 AI 或機器學習模型的數據與指標，例如房子的坪數、車齡、收入或地區。"
  },
  {
    category: "AI 與機器學習生命週期",
    name: "資料集切分",
    english: "Data Splitting",
    description: "將資料切成訓練集、驗證集與測試集，分別用於學習、調整與最終評估模型。"
  },
  {
    category: "AI 與機器學習生命週期",
    name: "訓練集",
    english: "Training Dataset",
    description: "給模型讀書與學習用的資料，用來讓模型找出特徵與標籤之間的規律。"
  },
  {
    category: "AI 與機器學習生命週期",
    name: "驗證集",
    english: "Validation Dataset",
    description: "模型的模擬考，用來評估效能、調整參數，並協助防止過度擬合。"
  },
  {
    category: "AI 與機器學習生命週期",
    name: "測試集",
    english: "Test Dataset",
    description: "模型的期末考或盲測。在模型確定後，用來評估面對未來資料時的真實準確度。"
  },
  {
    category: "AI 與機器學習生命週期",
    name: "過度擬合",
    english: "Overfitting",
    description: "模型太貼合訓練資料，導致訓練表現很好，但面對新資料時泛化能力變差。"
  },
  {
    category: "AI 與機器學習生命週期",
    name: "模型評估",
    english: "Model Evaluation",
    description: "使用驗證集或測試集與評估指標檢查模型效能，例如 Accuracy、Precision、Recall、AUC 或混淆矩陣。"
  },
  {
    category: "AI 與機器學習生命週期",
    name: "特徵工程",
    english: "Feature Engineering",
    description: "建立、轉換或整理輸入特徵，讓模型更容易從資料中學到有用規律。"
  },
  {
    category: "AI 與機器學習生命週期",
    name: "特徵選取",
    english: "Feature Selection",
    description: "從所有可用特徵中挑選最有用的特徵，減少雜訊、降低複雜度並改善模型表現。"
  },
  {
    category: "AI 與機器學習生命週期",
    name: "混淆矩陣",
    english: "Confusion Matrix",
    description: "用 0 和 1 的網格或表格顯示分類模型的預測結果與實際正負值，用來看 True Positive、False Positive、True Negative、False Negative。"
  },
  {
    category: "AI 與機器學習生命週期",
    name: "ROC 曲線",
    english: "ROC Curve",
    description: "用來評估二元分類模型在不同閾值下的表現，通常比較真正率與假正率。"
  },
  {
    category: "AI 與機器學習生命週期",
    name: "AUC 計量",
    english: "AUC Metric",
    description: "ROC 曲線下的面積，用來衡量分類模型整體區分正負類別的能力，數值越高通常代表模型越好。"
  },
  {
    category: "AI 與機器學習生命週期",
    name: "閾值",
    english: "Threshold",
    description: "分類模型將機率轉成類別的切分點，例如機率大於 0.5 判定為正類別。調整閾值會影響精確率與召回率。"
  },
  {
    category: "AI 與機器學習生命週期",
    name: "正確率",
    english: "Accuracy",
    description: "模型預測正確的比例，適合類別分布較平均的分類問題。"
  },
  {
    category: "AI 與機器學習生命週期",
    name: "精確率",
    english: "Precision",
    description: "模型預測為正類別的結果中，實際也為正類別的比例。重點是減少假陽性。"
  },
  {
    category: "AI 與機器學習生命週期",
    name: "召回率",
    english: "Recall",
    description: "所有實際正類別中，被模型成功找出來的比例。重點是減少假陰性。"
  },
  {
    category: "AI 與機器學習生命週期",
    name: "模型",
    english: "Model",
    description: "從訓練資料學到的規則或模式，可用來對新資料進行預測。"
  },
  {
    category: "AI 與機器學習生命週期",
    name: "推論",
    english: "Inference",
    description: "使用已訓練完成的模型，對新資料產生預測結果。"
  },
  {
    category: "五大 AI 核心領域",
    name: "機器學習",
    english: "Machine Learning",
    description: "讓系統從資料中學習規律，用來進行預測、分類或分群。"
  },
  {
    category: "五大 AI 核心領域",
    name: "迴歸",
    english: "Regression",
    description: "預測連續數值。考題關鍵字包含預測金額、溫度、房價、銷售額或時間。"
  },
  {
    category: "五大 AI 核心領域",
    name: "分類",
    english: "Classification",
    description: "預測類別或標籤。考題關鍵字包含是否為詐騙、垃圾郵件分類、圖片多選一。"
  },
  {
    category: "五大 AI 核心領域",
    name: "叢集 / 聚類",
    english: "Clustering",
    description: "資料沒有標記時，純粹依相似度將資料分群。常見情境是客戶分群或市場區隔。"
  },
  {
    category: "五大 AI 核心領域",
    name: "深度學習",
    english: "Deep Learning",
    description: "使用多層神經網路處理複雜資料的機器學習技術，常用於影像辨識、語音辨識與自然語言處理。"
  },
  {
    category: "五大 AI 核心領域",
    name: "Transformer 架構",
    english: "Transformer Architecture",
    description: "現代大型語言模型常用的深度學習架構，擅長處理序列資料與文字上下文，是生成式 AI 的重要基礎。"
  },
  {
    category: "五大 AI 核心領域",
    name: "電腦視覺",
    english: "Computer Vision",
    description: "讓 AI 分析圖片或影片，例如圖片分類、物件偵測、OCR 與臉部偵測。"
  },
  {
    category: "五大 AI 核心領域",
    name: "圖像分類",
    english: "Image Classification",
    description: "判斷整張圖片屬於哪個類別，或照片中有沒有特定物品。"
  },
  {
    category: "五大 AI 核心領域",
    name: "物件偵測",
    english: "Object Detection",
    description: "不只辨識物品，還會標出該物品在影像中的確切位置。"
  },
  {
    category: "五大 AI 核心領域",
    name: "邊界框",
    english: "Bounding Box",
    description: "物件偵測用來標示物件位置的方框，是 Object Detection 的常見考點。"
  },
  {
    category: "五大 AI 核心領域",
    name: "文字擷取",
    english: "Optical Character Recognition / OCR",
    description: "從影像、掃描文件、路標圖片中提取印刷或手寫文字。"
  },
  {
    category: "五大 AI 核心領域",
    name: "臉部偵測",
    english: "Face Detection",
    description: "在圖片中找出人臉的位置。考試要分清楚：偵測人臉位置不等於辨識某個人的身分。"
  },
  {
    category: "五大 AI 核心領域",
    name: "臉部分析",
    english: "Face Analysis",
    description: "分析臉部相關屬性或特徵。這類功能通常會牽涉隱私、安全與負責任 AI 限制。"
  },
  {
    category: "五大 AI 核心領域",
    name: "Azure AI Face",
    english: "Azure AI Face",
    description: "Azure 上用於臉部偵測與臉部分析的服務。遇到人臉偵測相關題目時要和 Azure AI Vision 區分。"
  },
  {
    category: "五大 AI 核心領域",
    name: "自然語言處理",
    english: "Natural Language Processing / NLP",
    description: "讓 AI 理解、分析或產生人類語言，例如情緒分析、實體辨識、翻譯與語音。"
  },
  {
    category: "五大 AI 核心領域",
    name: "情感分析",
    english: "Sentiment Analysis",
    description: "辨識文字評論是正面、負面還是中立。"
  },
  {
    category: "五大 AI 核心領域",
    name: "關鍵字片語提取",
    english: "Key Phrase Extraction",
    description: "從文章或文字中抓出核心單字與關鍵片語。"
  },
  {
    category: "五大 AI 核心領域",
    name: "實體辨識",
    english: "Entity Recognition",
    description: "從文字中找出人名、地點、組織、日期等具體資訊。"
  },
  {
    category: "五大 AI 核心領域",
    name: "語言模型",
    english: "Language Modeling",
    description: "讓模型理解文字上下文並預測或產生文字，是文字生成、補全、摘要與問答的基礎。"
  },
  {
    category: "五大 AI 核心領域",
    name: "翻譯",
    english: "Translation",
    description: "將文字或語音從一種語言轉換成另一種語言，屬於自然語言處理常見工作負載。"
  },
  {
    category: "五大 AI 核心領域",
    name: "Azure AI Translator",
    english: "Azure AI Translator",
    description: "Azure 上用於文字翻譯的服務。遇到多語言文字翻譯情境時可優先聯想到 Translator。"
  },
  {
    category: "五大 AI 核心領域",
    name: "交談式 AI",
    english: "Conversational AI",
    description: "讓電腦與人類能進行流暢對話。考題關鍵字包含虛擬助理、客服聊天視窗與聊天機器人。"
  },
  {
    category: "五大 AI 核心領域",
    name: "互動式語音回應系統",
    english: "Interactive Voice Response / IVR",
    description: "讓電話系統依使用者的語音或按鍵選項自動回應並路由通話。考題若問 IVR 功能，重點通常是根據語音或選單路由通話。"
  },
  {
    category: "五大 AI 核心領域",
    name: "Azure Bot Service",
    english: "Azure Bot Service",
    description: "用來建立、連接、部署與管理聊天機器人的 Azure 服務，可部署到 Teams、LINE 等通道。"
  },
  {
    category: "五大 AI 核心領域",
    name: "知識探索 / 知識採礦",
    english: "Knowledge Mining",
    description: "從大量無結構化歷史檔案，例如 PDF 與掃描合約中，自動提取、索引並建立可搜尋知識庫。"
  },
  {
    category: "五大 AI 核心領域",
    name: "Azure AI Search",
    english: "Azure AI Search",
    description: "知識採礦與智慧搜尋常用服務，可將文件內容索引成可搜尋的知識庫。"
  },
  {
    category: "負責任 AI",
    name: "公平性",
    english: "Fairness",
    description: "AI 系統應平等對待所有人，例如履歷篩選不能因性別或種族產生偏見。"
  },
  {
    category: "負責任 AI",
    name: "可靠性與安全性",
    english: "Reliability and Safety",
    description: "系統在非預期狀況下仍需穩定且不造成危害，例如自動駕駛在大雨中仍能正確煞車。"
  },
  {
    category: "負責任 AI",
    name: "隱私與安全性",
    english: "Privacy and Security",
    description: "保護使用者隱私資料，資料存取必須安全、加密且合規，例如醫療病歷嚴格加密。"
  },
  {
    category: "負責任 AI",
    name: "包容性",
    english: "Inclusiveness",
    description: "AI 應排除障礙並造福所有人，例如為視障人士設計語音導覽，為聽障者提供即時字幕。"
  },
  {
    category: "負責任 AI",
    name: "透明度",
    english: "Transparency",
    description: "AI 的運作邏輯與限制應可被理解，且必須明確告知使用者正在與 AI 互動。"
  },
  {
    category: "負責任 AI",
    name: "權責性",
    english: "Accountability",
    description: "設計或部署 AI 系統的人、團隊或企業，必須為系統決策與錯誤承擔最終責任。"
  },
  {
    category: "Azure ML 與 AI 服務工具箱",
    name: "Azure Machine Learning",
    english: "Azure Machine Learning",
    description: "Azure 上用來建置、訓練、評估、部署與管理機器學習模型的雲端服務，適合自訂模型與完整機器學習生命週期。"
  },
  {
    category: "Azure ML 與 AI 服務工具箱",
    name: "Azure Machine Learning 工作區",
    english: "Azure Machine Learning Workspace",
    description: "使用 Azure Machine Learning 的核心資源容器。建立 Automated ML、資料資產、運算資源、實驗、模型與端點之前，通常要先建立工作區。"
  },
  {
    category: "Azure ML 與 AI 服務工具箱",
    name: "資料資產",
    english: "Data Assets",
    description: "Azure Machine Learning 中用來註冊、版本控管與重複使用訓練資料的資源。"
  },
  {
    category: "Azure ML 與 AI 服務工具箱",
    name: "運算資源",
    english: "Compute Resources",
    description: "Azure Machine Learning 中用來執行訓練、實驗、Designer 管線或推論的運算環境。若要執行 Designer pipeline，通常要先建立或選擇 compute resource。"
  },
  {
    category: "Azure ML 與 AI 服務工具箱",
    name: "Azure Machine Learning Studio",
    english: "Azure Machine Learning Studio",
    description: "用來建立自訂機器學習模型的平台，適合訓練、管理、部署與監控模型。"
  },
  {
    category: "Azure ML 與 AI 服務工具箱",
    name: "自動化機器學習",
    english: "Automated Machine Learning",
    description: "適合不想寫程式的人。通常在 Azure Machine Learning workspace 中建立，丟入數據後，系統自動嘗試多種演算法，找出較佳模型。"
  },
  {
    category: "Azure ML 與 AI 服務工具箱",
    name: "設計工具",
    english: "Designer",
    description: "Azure Machine Learning Studio 的視覺化拖拉介面，用來建立與管理機器學習管線。"
  },
  {
    category: "Azure ML 與 AI 服務工具箱",
    name: "管線",
    english: "Pipeline",
    description: "將資料處理、訓練、評估與部署等步驟串接成可重複執行的機器學習流程。"
  },
  {
    category: "Azure ML 與 AI 服務工具箱",
    name: "模型管理",
    english: "Model Management",
    description: "在 Azure Machine Learning 中註冊、版本控管、追蹤與管理已訓練模型的能力。"
  },
  {
    category: "Azure ML 與 AI 服務工具箱",
    name: "模型部署",
    english: "Model Deployment",
    description: "將已訓練模型部署成可被應用程式呼叫的服務，讓模型能用於實際推論。"
  },
  {
    category: "Azure ML 與 AI 服務工具箱",
    name: "端點",
    english: "Endpoint",
    description: "模型部署後提供給應用程式呼叫的入口。考題常會把部署模型與建立端點放在一起考。"
  },
  {
    category: "Azure ML 與 AI 服務工具箱",
    name: "筆記本",
    english: "Notebooks",
    description: "Azure Machine Learning Studio 內建的 Jupyter 環境，供資料科學家手寫 Python 或 R 程式碼。"
  },
  {
    category: "Azure ML 與 AI 服務工具箱",
    name: "Jupyter Notebook",
    english: "Jupyter Notebook",
    description: "互動式程式碼筆記本，常用於資料探索與手寫 Python 程式。它不是執行 Designer 管線前必須先建立的資源。"
  },
  {
    category: "Azure ML 與 AI 服務工具箱",
    name: "已註冊模型",
    english: "Registered Model",
    description: "已訓練並註冊到 Azure Machine Learning 的模型，可用於版本控管與部署。它通常是在訓練完成後才產生，不是執行管線前的必要條件。"
  },
  {
    category: "Azure ML 與 AI 服務工具箱",
    name: "Azure AI Vision",
    english: "Azure AI Vision",
    description: "處理圖片分析、物件偵測與 OCR 等視覺任務，也可用於車牌 OCR 類情境。"
  },
  {
    category: "Azure ML 與 AI 服務工具箱",
    name: "Azure AI Document Intelligence",
    english: "Azure AI Document Intelligence",
    description: "專門從發票、收據、身分證件與表單中提取欄位、鍵值對與表格資料。"
  },
  {
    category: "Azure ML 與 AI 服務工具箱",
    name: "鍵值對",
    english: "Key-Value Pairs",
    description: "Document Intelligence 常提取的資料形式，例如發票號碼對應實際號碼、日期對應實際日期。"
  },
  {
    category: "Azure ML 與 AI 服務工具箱",
    name: "Azure AI Language",
    english: "Azure AI Language",
    description: "處理純文字分析、情緒偵測、實體辨識、關鍵片語與對話語言理解。"
  },
  {
    category: "Azure ML 與 AI 服務工具箱",
    name: "文字分析",
    english: "Text Analytics",
    description: "分析純文字內容的能力，例如情緒分析、關鍵片語擷取、實體辨識與語言偵測。它不是語音輸出功能。"
  },
  {
    category: "Azure ML 與 AI 服務工具箱",
    name: "對話語言理解",
    english: "Conversational Language Understanding / CLU",
    description: "讓應用理解使用者語句中的意圖與實體，是 Azure AI Language 的常見能力。"
  },
  {
    category: "Azure ML 與 AI 服務工具箱",
    name: "Azure AI Speech",
    english: "Azure AI Speech",
    description: "處理聲音訊號，例如語音轉文字、文字轉語音、語音翻譯與聲紋辨識。"
  },
  {
    category: "Azure ML 與 AI 服務工具箱",
    name: "語音轉文字",
    english: "Speech to Text / STT",
    description: "將語音訊號轉換成文字，是 Azure AI Speech 的核心能力之一。"
  },
  {
    category: "Azure ML 與 AI 服務工具箱",
    name: "文字轉語音",
    english: "Text to Speech / TTS",
    description: "將文字轉換成自然語音，是 Azure AI Speech 的核心能力之一。"
  },
  {
    category: "Azure ML 與 AI 服務工具箱",
    name: "類神經語音",
    english: "Neural Voice",
    description: "Azure AI Speech 中用於產生自然、接近真人語音的文字轉語音能力。看到自然語音、旁白或語音輸出，可聯想到 Neural Voice。"
  },
  {
    category: "Azure ML 與 AI 服務工具箱",
    name: "聲紋辨識",
    english: "Speaker Recognition",
    description: "根據語音特徵辨識或驗證說話者身分，屬於 Azure AI Speech 相關能力。"
  },
  {
    category: "生成式 AI 與 Azure OpenAI",
    name: "生成式 AI",
    english: "Generative AI",
    description: "可以產生新內容的 AI，例如文字、圖片、摘要、程式碼與問答。"
  },
  {
    category: "生成式 AI 與 Azure OpenAI",
    name: "大型語言模型",
    english: "Large Language Model / LLM",
    description: "能理解與產生自然語言的大型模型，例如 GPT 類模型。"
  },
  {
    category: "生成式 AI 與 Azure OpenAI",
    name: "提示詞",
    english: "Prompt",
    description: "使用者提供給模型的指令、問題或上下文。"
  },
  {
    category: "生成式 AI 與 Azure OpenAI",
    name: "權杖",
    english: "Token",
    description: "模型處理文字的基本單位，可能是一個字、一段字詞或符號。"
  },
  {
    category: "生成式 AI 與 Azure OpenAI",
    name: "DALL-E 模型",
    english: "DALL-E Model",
    description: "專門負責文字轉圖像。看到產生卡通、繪製設計圖、插圖或圖片生成，通常選 DALL-E。"
  },
  {
    category: "生成式 AI 與 Azure OpenAI",
    name: "Azure OpenAI DALL-E 模型",
    english: "Azure OpenAI DALL-E Model",
    description: "Azure OpenAI Service 中可用於文字轉圖像的模型。看到 Azure OpenAI 產生圖片、插圖、卡通或設計草圖時，可聯想到 DALL-E。"
  },
  {
    category: "生成式 AI 與 Azure OpenAI",
    name: "文字轉圖像",
    english: "Text-to-Image",
    description: "根據文字提示產生圖像，是 DALL-E 類模型的代表能力。"
  },
  {
    category: "生成式 AI 與 Azure OpenAI",
    name: "GPT 模型",
    english: "GPT Model",
    description: "負責文字生成、摘要、對話、推理與程式碼編寫。舊稱 Codex 的程式碼能力已併入 GPT 類模型。"
  },
  {
    category: "生成式 AI 與 Azure OpenAI",
    name: "溫度",
    english: "Temperature",
    description: "控制生成結果隨機性的參數。越低越穩定，越高越有創意。"
  },
  {
    category: "生成式 AI 與 Azure OpenAI",
    name: "確定性",
    english: "Deterministic",
    description: "當 Temperature 趨近於 0，回答更嚴謹、固定且可預測，適合寫程式或客服 FAQ。"
  },
  {
    category: "生成式 AI 與 Azure OpenAI",
    name: "創造性",
    english: "Creative",
    description: "當 Temperature 趨近於 1 或更高，回答更隨機、有創意，適合行銷文案或寫故事。"
  },
  {
    category: "生成式 AI 與 Azure OpenAI",
    name: "模型幻覺",
    english: "Hallucination",
    description: "模型產生看似合理但錯誤、無根據或不存在的內容。"
  },
  {
    category: "生成式 AI 與 Azure OpenAI",
    name: "接地",
    english: "Grounding",
    description: "讓模型基於可信資料來源回答，以降低錯誤與幻覺風險。"
  },
  {
    category: "生成式 AI 與 Azure OpenAI",
    name: "檢索增強生成",
    english: "Retrieval-Augmented Generation / RAG",
    description: "先檢索相關資料，再交給模型生成答案，讓回答能參考可靠資料。"
  },
  {
    category: "生成式 AI 與 Azure OpenAI",
    name: "微調",
    english: "Fine-tuning",
    description: "使用特定資料進一步訓練模型，使模型更符合特定任務或風格。"
  },
  {
    category: "生成式 AI 與 Azure OpenAI",
    name: "內容篩選",
    english: "Content Filtering",
    description: "偵測並阻擋有害、不安全或不適當的輸入與輸出內容。"
  },
  {
    category: "生成式 AI 與 Azure OpenAI",
    name: "Azure OpenAI 服務",
    english: "Azure OpenAI Service",
    description: "在 Azure 上使用 OpenAI 模型的服務，例如 GPT 類模型與圖像生成模型。"
  },
  {
    category: "生成式 AI 與 Azure OpenAI",
    name: "Azure AI Foundry",
    english: "Azure AI Foundry",
    description: "用來建置、測試、部署與管理生成式 AI 應用的平台。"
  },
  {
    category: "生成式 AI 與 Azure OpenAI",
    name: "Azure AI Foundry 模型目錄",
    english: "Azure AI Foundry Model Catalog",
    description: "Azure AI Foundry 中用來瀏覽、比較、選擇與部署不同 AI 模型的模型目錄。"
  }
];

const topics = [
  ["模組一", "AI 與機器學習生命週期：Labeling、Features、Data Splitting、Training、Validation、Test、Overfitting"],
  ["模組二", "五大 AI 核心領域：Machine Learning、Computer Vision、NLP、Conversational AI、Knowledge Mining"],
  ["模組三", "Responsible AI：Fairness、Reliability and Safety、Privacy and Security、Inclusiveness、Transparency、Accountability"],
  ["模組四", "Azure ML 與 AI Services：AML Studio、Automated ML、Designer、Document Intelligence、Language、Speech"],
  ["模組五", "Generative AI 與 Azure OpenAI：DALL-E、GPT、Temperature、RAG、Grounding、Content Filtering"]
];

let activeIndex = 0;
let speechTimer = null;
let speechRunId = 0;

const els = {
  categoryText: document.querySelector("#categoryText"),
  englishText: document.querySelector("#englishText"),
  conceptCountText: document.querySelector("#conceptCountText"),
  voiceStatus: document.querySelector("#voiceStatus"),
  conceptCategory: document.querySelector("#conceptCategory"),
  conceptName: document.querySelector("#conceptName"),
  conceptDescription: document.querySelector("#conceptDescription"),
  conceptList: document.querySelector("#conceptList"),
  speakCurrentBtn: document.querySelector("#speakCurrentBtn"),
  stopBtn: document.querySelector("#stopBtn"),
  feedback: document.querySelector("#feedback"),
  topicList: document.querySelector("#topicList")
};

function renderTopics() {
  els.topicList.innerHTML = topics
    .map(([title, detail]) => `
      <div class="topic-item">
        <strong>${title}</strong>
        <span>${detail}</span>
      </div>
    `)
    .join("");
}

function renderConcepts() {
  els.conceptCountText.textContent = `${concepts.length} 個`;
  els.conceptList.innerHTML = concepts
    .map((item, index) => `
      <button class="concept-btn" type="button" data-index="${index}">
        <strong>${item.name}</strong>
        <span>${item.english}</span>
      </button>
    `)
    .join("");

  els.conceptList.querySelectorAll(".concept-btn").forEach((button) => {
    button.addEventListener("click", () => {
      selectConcept(Number(button.dataset.index), true);
    });
  });
}

function speechText(item) {
  return `${item.english}. ${item.name}。${item.description}`;
}

function speak(text) {
  if (!("speechSynthesis" in window)) {
    els.feedback.textContent = "這個瀏覽器不支援語音朗讀。";
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "zh-TW";
  utterance.rate = 0.9;
  utterance.onstart = () => {
    els.voiceStatus.textContent = "朗讀中";
  };
  utterance.onend = () => {
    els.voiceStatus.textContent = "點擊朗讀";
  };
  window.speechSynthesis.speak(utterance);
}

function selectConcept(index, shouldSpeak) {
  activeIndex = index;
  const item = concepts[index];

  els.categoryText.textContent = item.category;
  els.englishText.textContent = item.english;
  els.conceptCategory.textContent = item.category;
  els.conceptName.textContent = `${item.name} / ${item.english}`;
  els.conceptDescription.textContent = item.description;
  els.feedback.textContent = `已選取：${item.name}。`;

  els.conceptList.querySelectorAll(".concept-btn").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.index) === index);
  });

  if (shouldSpeak) {
    speak(speechText(item));
  }
}

els.speakCurrentBtn.addEventListener("click", () => {
  speak(speechText(concepts[activeIndex]));
});

els.stopBtn.addEventListener("click", () => {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  els.voiceStatus.textContent = "點擊朗讀";
  els.feedback.textContent = "已停止朗讀。";
});

function speechText(item) {
  return `${item.english}|||${item.name}。${item.description}`;
}

function stopSpeech(message = "已停止朗讀。") {
  speechRunId += 1;

  if (speechTimer) {
    window.clearTimeout(speechTimer);
    speechTimer = null;
  }

  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  els.voiceStatus.textContent = "英國腔朗讀";
  els.feedback.textContent = message;
}

function speak(text) {
  if (!("speechSynthesis" in window)) {
    els.feedback.textContent = "這個瀏覽器不支援語音朗讀。";
    return;
  }

  stopSpeech("準備朗讀...");
  const runId = speechRunId;

  speechTimer = window.setTimeout(() => {
    if (runId !== speechRunId) {
      return;
    }

    speechTimer = null;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-TW";
    utterance.rate = 0.88;
    utterance.onstart = () => {
      if (runId === speechRunId) {
        els.voiceStatus.textContent = "朗讀中";
      }
    };
    utterance.onend = () => {
      if (runId === speechRunId) {
        els.voiceStatus.textContent = "點擊朗讀";
      }
    };
    utterance.onerror = () => {
      if (runId === speechRunId) {
        els.voiceStatus.textContent = "點擊朗讀";
        els.feedback.textContent = "朗讀被中止，可以再點一次概念。";
      }
    };

    window.speechSynthesis.speak(utterance);
  }, 140);
}

function pickPreferredVoice() {
  if (!("speechSynthesis" in window)) {
    return null;
  }

  const voices = window.speechSynthesis.getVoices();
  const preferredNames = ["Daniel", "George", "Ryan", "Sonia", "Libby", "Serena", "Microsoft George", "Microsoft Ryan", "Google UK English"];

  return voices.find((voice) => voice.lang === "en-GB" && preferredNames.some((name) => voice.name.includes(name)))
    || voices.find((voice) => voice.lang === "en-GB")
    || voices.find((voice) => voice.lang.startsWith("en"))
    || null;
}

const previousSpeak = speak;
function speakWithBrightVoice(text) {
  if (!("speechSynthesis" in window)) {
    els.feedback.textContent = "這個瀏覽器不支援語音朗讀。";
    return;
  }

  stopSpeech("準備朗讀...");
  const runId = speechRunId;

  speechTimer = window.setTimeout(() => {
    if (runId !== speechRunId) {
      return;
    }

    speechTimer = null;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    const preferredVoice = pickPreferredVoice();
    if (preferredVoice) {
      utterance.voice = preferredVoice;
      utterance.lang = preferredVoice.lang;
    } else {
      utterance.lang = "en-GB";
    }
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;
    utterance.onstart = () => {
      if (runId === speechRunId) {
        els.voiceStatus.textContent = "英國腔朗讀中";
      }
    };
    utterance.onend = () => {
      if (runId === speechRunId) {
        els.voiceStatus.textContent = "英國腔朗讀";
      }
    };
    utterance.onerror = () => {
      if (runId === speechRunId) {
        els.voiceStatus.textContent = "英國腔朗讀";
        els.feedback.textContent = "朗讀被中止，可以再點一次概念。";
      }
    };

    window.speechSynthesis.speak(utterance);
  }, 160);
}

speak = speakWithBrightVoice;

function pickVoiceByLang(lang, fallbackPrefix) {
  if (!("speechSynthesis" in window)) {
    return null;
  }

  const voices = window.speechSynthesis.getVoices();
  return voices.find((voice) => voice.lang === lang)
    || voices.find((voice) => voice.lang.startsWith(fallbackPrefix))
    || null;
}

function speakWithBritishSplitVoice(text) {
  if (!("speechSynthesis" in window)) {
    els.feedback.textContent = "這個瀏覽器不支援語音朗讀。";
    return;
  }

  stopSpeech("準備英國腔朗讀...");
  const runId = speechRunId;

  speechTimer = window.setTimeout(() => {
    if (runId !== speechRunId) {
      return;
    }

    speechTimer = null;
    window.speechSynthesis.cancel();

    const [englishPart, chinesePart = ""] = text.split("|||");
    const britishVoice = pickPreferredVoice() || pickVoiceByLang("en-GB", "en");
    const chineseVoice = pickVoiceByLang("zh-TW", "zh");
    const voiceName = britishVoice ? `${britishVoice.name} (${britishVoice.lang})` : "瀏覽器預設聲音";
    const voiceNote = britishVoice && britishVoice.lang === "en-GB"
      ? "已使用英國腔英文聲音"
      : "此裝置沒有可用的 en-GB 英國腔聲音，已退回可用英文聲音";

    const speakOne = (content, voice, lang, onEnd) => {
      const utterance = new SpeechSynthesisUtterance(content);
      if (voice) {
        utterance.voice = voice;
        utterance.lang = voice.lang;
      } else {
        utterance.lang = lang;
      }
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 1;
      utterance.onend = onEnd;
      utterance.onerror = onEnd;
      window.speechSynthesis.speak(utterance);
    };

    els.voiceStatus.textContent = "英國腔朗讀中";
    els.feedback.textContent = `${voiceNote}：${voiceName}`;

    speakOne(englishPart, britishVoice, "en-GB", () => {
      if (runId !== speechRunId) {
        return;
      }

      if (chinesePart.trim()) {
        speakOne(chinesePart, chineseVoice, "zh-TW", () => {
          if (runId === speechRunId) {
            els.voiceStatus.textContent = "英國腔朗讀";
          }
        });
      } else {
        els.voiceStatus.textContent = "英國腔朗讀";
      }
    });
  }, 160);
}

stopSpeech = function(message = "已停止朗讀。") {
  speechRunId += 1;

  if (speechTimer) {
    window.clearTimeout(speechTimer);
    speechTimer = null;
  }

  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  els.voiceStatus.textContent = "英國腔朗讀";
  els.feedback.textContent = message;
};

speak = speakWithBritishSplitVoice;

if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    pickPreferredVoice();
  };
}

els.stopBtn.addEventListener("click", () => {
  stopSpeech();
});

window.addEventListener("beforeunload", () => {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
});

renderTopics();
renderConcepts();
selectConcept(0, false);
